import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';

interface MovieProps {
  movie?: MovieType[];
}

const Popular = ({ movie }: MovieProps) => {
  return (
    <S.Background>
      <S.Blur />
      {movie && (
        <S.PopularSection>
          <S.BestPoster>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
              width={487}
              height={708}
              alt=""
            />
            <S.BestIcon>Best</S.BestIcon>
          </S.BestPoster>
          <S.InfoSection>
            <S.BestTitle>{movie[0].title}</S.BestTitle>
            <hr />
            <S.BestOverview>{movie[0].overview}</S.BestOverview>
            <S.ListSection>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie[1].poster_path}`}
                width={310}
                height={441}
                alt=""
              />
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie[2].poster_path}`}
                width={310}
                height={441}
                alt=""
              />
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie[3].poster_path}`}
                width={310}
                height={441}
                alt=""
              />
            </S.ListSection>
          </S.InfoSection>
        </S.PopularSection>
      )}
    </S.Background>
  );
};

export default Popular;