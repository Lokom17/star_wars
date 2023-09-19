"use client"

import { IAllData } from "../types";
import { isDataEmpty } from "../utils/helpers";
import { CharacterCard, Pagination } from "../components";

interface ListCharactersProps {
    list: IAllData
}

export default function ListCharacters({ list }: ListCharactersProps) {
    return (
        <>
            {!isDataEmpty(list.results) ? (
                <section>
                    <div className='home__characters-wrapper'>
                        {list?.results.map((character) => (
                            <CharacterCard character={character} key={character.created.toString()} />
                        ))}
                    </div>

                    <Pagination
                        isPrevious={list.previous}
                        isNext={list.next}
                    />
                </section>
            ) : (
                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            )}
        </>
    )
}