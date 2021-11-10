import React from "react";

const CreditCard = () => {
	return (
		<div className="container">
			<div className="credit-card">
				<div className="credit-card-inner">
					<div className="credit-card-front">
						<div id="card-type">visa</div>
						<div id="card-number">4242424242424242</div>

						<div id="card-expiration">
							<div id="validthru">Valid Thru</div>
							02/22
						</div>

						<div id="card-holder-name">my name</div>
					</div>
					<div className="credit-card-back">
						<div className="card-stripe" />
						<div className="card-sig-container">
							<div className="signature">my name</div>
							CVC
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
