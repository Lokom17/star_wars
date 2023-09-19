import { MouseEventHandler } from "react";

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  url: string;
}

export interface IAllData {
  count: string;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface PaginationProps {
  isNext: string | null;
  isPrevious: string | null;
}

export interface FilterProps {
  page?: string;
  search?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface dataStarship {
  name: string;
  model: string;
  passengers: string;
}

export interface dataSkill {
  average_lifespan: string;
  classification: string;
  language: string;
}
