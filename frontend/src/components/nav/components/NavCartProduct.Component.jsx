import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavCartProductComponent = ({
	productsList,
	totalPriceCart,
	toggleCartView,
	setToggleViewCart,
	widthMob,
}) => {
	console.log(toggleCartView);


	const hideCartHolder = ()=>{
        let cart = document.querySelector('.cart-wrapper');
		if(widthMob >= 990){
			cart.classList.add('hideCart');
			cart.addEventListener('mouseover',()=>{
				cart.classList.remove('hideCart');
			});
		}else{
			setToggleViewCart(false);
		}

    }
	
	return (
		<>
			<div
				className={`${
					toggleCartView
						? 'mob_cartInfo-with-products'
						: 'cartInfo-with-products'
				}`}>
				<div className='cart-products-holder'>
					<h5>
						Your Cart: {productsList.length} Item
						{productsList.length > 1 ? 's' : null}
					</h5>
					<hr />
					<div className='subtotalHolder'>
						<p>Subtotal</p>
						<p>${totalPriceCart} </p>
					</div>
				</div>
				<div className='btnGroup'>
					<Link to='/cartshop/cart-products' className='btnCart' onClick={()=>{hideCartHolder()}}>
						View Cart
					</Link>
					<Link to='/cartshop/checkout' className='btnCheckout' onClick={()=>{hideCartHolder()}}>
						Process To CheckOut
					</Link>
				</div>
			</div>
		</>
	);
};


export default NavCartProductComponent;
