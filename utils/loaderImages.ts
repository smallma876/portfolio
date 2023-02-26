interface MyLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const myLoader = ({ src, width, quality }: MyLoaderProps) => {
  return `https:${src}?w=${width}&q=${quality || 75}`;
};
