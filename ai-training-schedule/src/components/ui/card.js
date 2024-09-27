// src/components/ui/card.js

export function Card({ children }) {
    return <div className="bg-white shadow-md rounded-lg">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-6">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="px-6 py-4 border-b">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-lg font-bold">{children}</h2>;
  }
  