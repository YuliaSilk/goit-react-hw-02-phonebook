import { FilterInputStyle, FilterStyle } from './Filter.styled'

export const Filter = ({ filterName, onChangeFilter }) => {
    return (
        <FilterStyle>
          Find contacts by name
            <FilterInputStyle
            type="text"
            value={filterName}
            placeholder="Please, enter a name"
            onChange={onChangeFilter}
            />
        </FilterStyle>
    )
}
