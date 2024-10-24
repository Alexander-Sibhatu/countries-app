
export type CountryT = {
    area: number,
    name: {
        common: string
    },
    flags: {
        png: string,
        svg: string
    },
    population: number,
    capital: string[],
    region: string,
    independent: boolean
}

export type CountriesT = CountryT[]

export interface RootState {
    favourites: {
      favouriteCountries: CountriesT; // Assuming favouriteCountries is of type CountriesT
    };
  }