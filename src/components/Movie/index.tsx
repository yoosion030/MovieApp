import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';
import * as I from 'assets/svg';
import { useState } from 'react';
interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    console.log('저장 작업 실행');
    setIsLike(!isLike);
  };
  return (
    <S.Movie>
      <S.MovieInfo href={`movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width={350}
          height={461}
        />
        <S.Title>{movie.title}</S.Title>
        <S.Overview>{movie.overview}</S.Overview>
      </S.MovieInfo>
      <S.LikeButton onClick={handleLike}>
        {isLike ? <I.PinkLikeIcon /> : <I.LikeIcon />}
      </S.LikeButton>
    </S.Movie>
  );
};

export default Movie;
