import { FilterInputStyle, FilterStyle } from './Filter.styled'

const changeFilter = (e, toSearch) => {
toSearch(e.target.value);
}
export const Filter = ({ filterName, toSearch}) => {
    return (
        <FilterStyle>
          Find contacts by name
            <FilterInputStyle
            type="text"
            value={filterName}
            placeholder="Please, enter a name"
            onChange={e => changeFilter(e, toSearch)}
            />
        </FilterStyle>
    )
}
