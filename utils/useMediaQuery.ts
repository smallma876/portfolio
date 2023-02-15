import { useWindowSize } from "./useWindowResize";

export const useMediaQuery = () => {
  const { width } = useWindowSize();
  const isEqualOrLessThanMedium = width! <= 768;

  return { isEqualOrLessThanMedium };
};
