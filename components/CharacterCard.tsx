"use client";

import { useRouter } from 'next/navigation'

import { parseISO, format } from 'date-fns';

import { ICharacter } from "../types";
import CustomButton from "./CustomButton";

interface CharacterProps {
  character: ICharacter;
}

export default function CharacterCard({ character }: CharacterProps) {
  const { name, birth_year, height, created, url } = character;
  const router = useRouter();

  const handleClick = (() => {
    const last = url.split('/');
    router.push(`${window.location.origin}/people/${last.at(-2)}`)
  })

  return (
    <div className="character-card group">
      <div className="character-card__content">
        <h2 className="character-card__content-title">
          {name}
        </h2>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='group-hover:invisible w-full text-grey'>
          <p className='text-[16px] leading-[19px] mt-4'>Birth year: {birth_year}</p>
          <p className='text-[16px] leading-[19px] mt-3'>Height: {height}</p>
          <p className='text-[16px] leading-[19px] mt-3'>Date created: {created ? format(parseISO(created), 'dd/MM/yyyy HH:MM') : "n/a"}</p>
        </div>

        <div className="character-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

