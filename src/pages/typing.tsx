interface Model {
  id: string;
  date: string;
  entries: {
    id: string;
    content: string;
  }[];
}

type PartialModel = unknown;

export default function Page() {
  const resource: PartialModel = {
    id: "Hello",
    date: undefined,
    entries: []
  };

  return (
    <div>
      {resource.entries?.map((entry) => (
        <div key={entry.id}>{entry.content}</div>
      ))}
    </div>
  );
}
