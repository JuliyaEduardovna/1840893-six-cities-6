export type SortType = 'popular' | 'priceLowToHigh' | 'priceHighToLow' | 'topRated';

type VariantsSortingProps = {
  sortType: SortType;
  onSortChange: (sortType: SortType) => void;
};

const SORT_OPTIONS: Array<{ type: SortType; label: string }> = [
  { type: 'popular', label: 'Popular' },
  { type: 'priceLowToHigh', label: 'Price: low to high' },
  { type: 'priceHighToLow', label: 'Price: high to low' },
  { type: 'topRated', label: 'Top rated first' },
];

export default function VariantsSorting({
  sortType,
  onSortChange
}: VariantsSortingProps): JSX.Element {
  const activeLabel = SORT_OPTIONS.find((option) => option.type === sortType)?.label;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeLabel}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORT_OPTIONS.map((option) => (
          <li
            key={option.type}
            className={
              option.type === sortType
                ? 'places__option places__option--active'
                : 'places__option'
            }
            tabIndex={0}
            onClick={() => onSortChange(option.type)}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter' || evt.key === ' ') {
                onSortChange(option.type);
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
}

