import cities from "../config/cities";

export default () => {
  const mappedCities = cities.map((city) => ({
    ...city,
    slots: city.slots.map((slot) => ({
      building: {
        player: null,
        type: null,
        level: null,
        isFlipped: null,
      },
      availableBuildings: slot,
    })),
  }));

  return mappedCities;
};
