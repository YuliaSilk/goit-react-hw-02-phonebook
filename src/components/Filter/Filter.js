import { FilterStyle } from './Filter.styled'

const handleChange = (e, toSearch) => {
toSearch(e.target.value);
}
export const Filter = ({ filterName, toSearch}) => {
    return (
        <FilterStyle>
            Filter
            <input
            type="text"
            value={filterName}
            placeholder="enter a name"
            onChange={e => handleChange(e, toSearch)}
            />
        </FilterStyle>
    )
}
