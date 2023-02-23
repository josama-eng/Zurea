import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';

import { AiOutlineShoppingCart } from 'react-icons/ai';
// component
import NavCartProductComponent from './components/NavCartProduct.Component';
import NavMobileViewComponent from './components/navMobileView/NavMobileView.Component';
import NavDesktopViewComponent from './components/navDesktopView/NavDesktopView.Component';
import NavProfileViewComponent from './components/navProfileView/NavProfileView.Component.jsx';
import NavBarSearchComponent from "./components/NavBarSearch.Component";

function NavComponent() {
	const [productsList, setProductsList] = useState([
		// { title: 'prvi' },
		// { title: 'drugi' },
	]);
	const [totalPriceCart, setTotalPriceCart] = useState(0);

	const [widthMob, setWidthMob] = useState(window.innerWidth);
	const [toggleCartView, setToggleViewCart] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () =>
			setWidthMob(window.innerWidth)
		);

		if (widthMob >= 990) {
			toggleCart();
			toggleCartProduct();
		}
	}, [widthMob]);

	const toggleCart = () => {
		if (!productsList.length) {
			if (widthMob < 990) {
				setToggleViewCart((prevState) => !prevState);
			} else if (widthMob >= 990) {
				setToggleViewCart(false);
			}
		}
	};

	const toggleCartProduct = () => {
		if (productsList.length) {
			if (widthMob < 990) {
				setToggleViewCart((prevState) => !prevState);
			} else if (widthMob >= 990) {
				setToggleViewCart(false);
			}
		}
	};

	const showCartInfo = () => {
		if (productsList.length) {
			return (
				<NavCartProductComponent
					toggleCartView={toggleCartView}
					setToggleViewCart={setToggleViewCart}
					productsList={productsList}
					totalPriceCart={totalPriceCart}
					widthMob={widthMob}
				/>
			);
		} else {
			return (
				<div
					className={`${
						toggleCartView
							? 'mob_cartInfo-no-products'
							: 'cartInfo-no-products text-center'
					}`}>
					No product add in cart
				</div>
			);
		}
	};

	return (
		<div className='navbar'>
			{/* mobile view start here */}
			<NavMobileViewComponent />
			{/* desktop view */}
			<img src={logo} alt='logoImg' />
			<NavDesktopViewComponent />
			{/* profile and login section */}
			<div className='user'>
				<div className='profile'>
					<NavBarSearchComponent />
					<NavProfileViewComponent />
				</div>
				<div
					className='cart-wrapper'
					title='Cart'
					onClick={() => toggleCart()}>
					<div
						className='cart'
						onClick={() => {
							toggleCartProduct();
						}}>
						<div className='icon-holder'>
							<AiOutlineShoppingCart className='cart-icon-one' />
							<AiOutlineShoppingCart className='cart-icon-two' />
						</div>

						<p>Cart - {productsList.length}</p>
					</div>
					{showCartInfo()}
				</div>
			</div>
		</div>
	);
}

export default NavComponent;
