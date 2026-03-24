import { ChangeEvent } from 'react';

type RatingStarProps = {
  value: number;
  title: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function RatingStar({
  value,
  title,
  checked,
  onChange,
}: RatingStarProps) {
  const inputId = `${value}-stars`;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={inputId}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={inputId}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
