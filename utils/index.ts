import { isDataEmpty } from "./helpers";
import { FilterProps, dataStarship, dataSkill } from "../types";

export async function fetchAllPeople(filters: FilterProps) {
  const { page, search } = filters;
  try {
    const response = await fetch(
      `https://swapi.dev/api/people?page=${page}&search=${search}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchPeople(number?: string | null) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${number}`);
    let data = await response.json();

    if (!isDataEmpty(data.starships)) {
      let dataStarships: dataStarship[] = [];
      const fetches = await data.starships.map((url: string) =>
        fetch(url).then((res) => res.json())
      );
      await Promise.allSettled(fetches)
        .then((results) => {
          results.map((result) => {
            if (result.status == "fulfilled") {
              const { name, model, passengers } = result.value;
              dataStarships.push({ name, model, passengers });
              return dataStarships;
            }
          });
        })
        .catch((err) => {
          throw err;
        });

      data["dataStarships"] = dataStarships;
    }
    if (!isDataEmpty(data.species)) {
      let dataSkill: dataSkill[] = [];
      const fetches = await data.species.map((url: string) =>
        fetch(url).then((res) => res.json())
      );
      await Promise.allSettled(fetches)
        .then((results) => {
          results.map((result) => {
            if (result.status == "fulfilled") {
              const { average_lifespan, classification, language } =
                result.value;
              dataSkill.push({ average_lifespan, classification, language });
              return dataSkill;
            }
          });
        })
        .catch((err) => {
          throw err;
        });

      data["dataSkills"] = dataSkill;
    }

    return data;
  } catch (err) {
    throw err;
  }
}
