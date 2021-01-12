import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectCollectionsLoaded } from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsPage from '../../pages/collection/collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state),

})

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage)

export default CollectionsPageContainer;