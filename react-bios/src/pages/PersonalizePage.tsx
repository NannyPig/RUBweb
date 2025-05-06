import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const PersonalizePage = () => {
  const { state } = useLocation();
  const movie = state?.movie;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position of the uploaded image
  const [dragging, setDragging] = useState(false); // Whether the image is being dragged
  const [scale, setScale] = useState(1); // Scale of the uploaded image
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 }); // Starting position when dragging begins
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Ref for background (movie poster image)
  const backgroundImg = useRef<HTMLImageElement | null>(null);

  // Canvas setup for movie background image (only loads once)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (movie?.poster_path) {
      backgroundImg.current = new Image();
      backgroundImg.current.src = new URL(`../assets/images/${movie.poster_path}`, import.meta.url).href;

      backgroundImg.current.onload = () => {
        if (canvas && ctx && backgroundImg.current) {
          // Set canvas size based on the image size (same as the movie poster)
          canvas.width = backgroundImg.current.width;
          canvas.height = backgroundImg.current.height;
          ctx.drawImage(backgroundImg.current!, 0, 0); // Draw the movie poster on the canvas once
        }
      };
    }
  }, [movie?.poster_path]);

  // Handle uploaded image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string); // Store uploaded image as data URL
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle mouse movement for dragging the image
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY }); // Capture the starting position of the mouse when dragging starts
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();

      // Calculate the new position based on the difference from the start position
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));

      // Update the start position for the next movement
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Draw image on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (uploadedImage && canvas && ctx) {
      const overlayImg = new Image();
      overlayImg.src = uploadedImage;

      overlayImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
        if (backgroundImg.current) {
          ctx.drawImage(backgroundImg.current!, 0, 0); // Redraw the background (movie poster)
        }
        ctx.drawImage(overlayImg, position.x, position.y, 100 * scale, 100 * scale); // Draw the uploaded image
      };
    }
  }, [uploadedImage, position, scale]);

  // Zoom functionality for uploaded image
  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(scale - 0.1);

  // Confirm and add to cart
  const handleConfirm = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const finalImage = canvas.toDataURL("image/png");

    addToCart({
      id: `${movie.id}-custom-${Date.now()}`,
      title: movie.title,
      poster_path: movie.poster_path,
      personalizedImage: finalImage, // Store the final customized image
    });

    navigate("/cart");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Personaliseer jouw tas</h1>
      <input type="file" onChange={handleImageUpload} className="mb-4" />
      
      {/* Canvas for movie and uploaded image */}
      <div
        className="border"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <canvas ref={canvasRef} className="w-full max-w-2xl h-auto" />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleZoomIn}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Zoom Out
        </button>
      </div>

      <button
        onClick={handleConfirm}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
      >
        Bevestig en voeg toe aan winkelmandje
      </button>
    </div>
  );
};

export default PersonalizePage;
