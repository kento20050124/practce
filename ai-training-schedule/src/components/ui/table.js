// src/components/ui/table.js

export function Table({ children }) {
    return <table className="min-w-full">{children}</table>;
  }
  
  export function TableBody({ children }) {
    return <tbody>{children}</tbody>;
  }
  
  export function TableCell({ children }) {
    return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
  }
  
  export function TableHead({ children }) {
    return <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>;
  }
  
  export function TableHeader({ children }) {
    return <thead className="bg-gray-50">{children}</thead>;
  }
  
  export function TableRow({ children }) {
    return <tr>{children}</tr>;
  }
  