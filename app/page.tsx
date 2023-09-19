
import { fetchAllPeople } from "../utils";
import { HomeProps, IAllData } from "../types";
import { ListCharacters, SearchBar } from "../components";

export default async function Home({ searchParams }: HomeProps) {
  const data = await fetchAllPeople({
    page: searchParams.page || '',
    search: searchParams.search || '',
  }) as IAllData;
  return (
    <main className='overflow-hidden'>
      <div className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Star Wars Character Explorer</h1>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <ListCharacters list={data} />
        </div>
      </div>
    </main >
  );
}
