import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../customButton/customButton.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {

	const { name, price, imageUrl } = item
	return (<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price} €</span>
		</div>
		<CustomButton className="addButton" onClick={() => addItem(item)} inverted>Ajouter au panier</CustomButton>
	</div>);
};

const MapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	};
};

export default connect(null, MapDispatchToProps)(CollectionItem);
