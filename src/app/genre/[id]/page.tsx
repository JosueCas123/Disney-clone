
interface Props {
    params: {
        id: string;
    },
    searchParams: {
        genre: string;
    }

}

export default function GenrePage({ params:{id}, searchParams:{genre} }: Props)  {

    

  return (
    <div>
      <h1>Hello GenrePage</h1>
      <h1>{id}</h1>
      <h1>{genre}</h1>
    </div>
  );
}