import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selector'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'

class ShopPage extends React.Component { 

	unsuscribeFromSnapshot = null;

	componentDidMount() {
		const { fetchCollectionsStart } = this.props;

		fetchCollectionsStart();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
			</div>
		);
	}
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
