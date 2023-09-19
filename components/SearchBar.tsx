"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const SearchBar = () => {
    const [nameCharacter, setNameCharacter] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nameCharacter.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(nameCharacter.toLowerCase());
    };

    const updateSearchParams = (nameCharacter: string) => {
        const newPathname = `${window.location.origin}/?search=${nameCharacter.toString()}`;
        router.push(newPathname);
    };

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <input
                    type='text'
                    name='name'
                    value={nameCharacter}
                    onChange={(e) => setNameCharacter(e.target.value)}
                    placeholder='Darth Vader...'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    );
};

export default SearchBar;
