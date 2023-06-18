import {FcSearch} from 'react-icons/fc'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    getUserInput,
    getCategory,
    getRating,
    removeFilter,
  } = props

  const userSearch = event => {
    if (event.key === 'Enter') {
      getUserInput(event.target.value)
    }
  }

  const categoryItem = value => {
    getCategory(value)
  }

  const starRating = starValue => {
    getRating(starValue)
  }

  const clearFilter = () => {
    removeFilter()
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="user-search"
          onKeyUp={userSearch}
        />
        <FcSearch />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(option => (
          <p
            key={option.name}
            className="category-items"
            onClick={() => categoryItem(option.categoryId)}
            type="button"
          >
            {option.name}
          </p>
        ))}
      </ul>
      <h1 className="category-heading">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(rating => (
          <button
            className="rating-btn"
            key={rating.ratingId}
            onClick={() => starRating(rating.ratingId)}
            type="button"
          >
            <img
              src={rating.imageUrl}
              alt={`rating ${rating.ratingId}`}
              className="rating-img"
            />
            <p className="category-items">&up</p>
          </button>
        ))}
      </ul>
      <button className="clear-filter-btn" type="button" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
