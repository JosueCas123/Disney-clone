
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
    </div>
  );
}