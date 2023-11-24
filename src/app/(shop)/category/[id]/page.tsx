import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params: { id } }: Props) {
  if (id === "kids") {
    notFound();
  }

  return (
    <div>
      <h1>Category {id}</h1>
    </div>
  );
}