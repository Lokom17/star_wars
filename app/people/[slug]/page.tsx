import { parseISO, format } from 'date-fns';

import { fetchPeople } from "../../../utils"
import { dataStarship, dataSkill } from "../../../types"
import { isDataEmpty } from "../../../utils/helpers";

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await fetchPeople(params.slug);
    const { name, birth_year, height, created, dataSkills, dataStarships } = data;
    return (
        <main className='overflow-hidden'>
            <div className='mt-12 padding-x padding-y max-width'>
                <div className='relative flex w-full mt-2'>
                    <div className='w-full text-grey'>
                        <h1 className='text-[26px] leading-[29px] font-bold'>{name}</h1>
                        <p className='text-[16px] leading-[19px] mt-10'>Birth year: {birth_year}</p>
                        <p className='text-[16px] leading-[19px] mt-3'>Height: {height}</p>
                        <p className='text-[16px] leading-[19px] mt-3'>Date created: {created ? format(parseISO(created), 'dd/MM/yyyy HH:MM') : "n/a"}</p>
                        {!isDataEmpty(dataSkills) && (
                            <>
                                <h2 className='text-[20px] leading-[23px] font-bold  mt-10'>Species</h2>
                                {dataSkills.map((skill: dataSkill) => (
                                    < ul className='relative flex flex-col w-full mt-4' key={skill.classification.toString()}>
                                        <li>Average Lifespan: {skill.average_lifespan}</li>
                                        <li>Classification: {skill.classification}</li>
                                        <li>Language: {skill.language}</li>
                                    </ul>
                                ))}
                            </>
                        )}
                        {!isDataEmpty(dataStarships) && (
                            <>
                                <h2 className='text-[20px] leading-[23px] font-bold  mt-10'>Starships</h2>
                                {dataStarships.map((ship: dataStarship) => (
                                    < ul className='relative flex flex-col w-full mt-4' key={ship.model.toString()}>
                                        <li>Name: {ship.name}</li>
                                        <li>Model: {ship.model}</li>
                                        <li>Passengers: {ship.passengers}</li>
                                    </ul>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main >
    );
}
