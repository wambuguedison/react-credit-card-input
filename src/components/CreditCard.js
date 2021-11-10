import React, { useState } from "react";
import "./CreditCard.css";

const CreditCard = () => {
	const [creditCardValues, setCreditCardValues] = useState({});

	const { cardNumber, cardHolderName, cardExpirationDate, cardCVV, cardType } =
		creditCardValues;
	return (
		<div className="container">
			<div className="credit-card">
				<div className="credit-card-inner">
					<div className="credit-card-front">
						<div id="card-type">{cardType}</div>
						<div id="card-number">{cardNumber}</div>

						<div id="card-expiration">
							{cardExpirationDate !== "" && (
								<div id="validthru">Valid Thru</div>
							)}
							{cardExpirationDate}
						</div>

						<div id="card-holder-name">{cardHolderName}</div>
					</div>
					<div className="credit-card-back">
						<div className="card-stripe" />
						<div className="card-sig-container">
							<div className="signature">{cardHolderName}</div>
							CVV {cardCVV}
						</div>
					</div>
				</div>
			</div>
			<form className="card-form">
				<label className="input-label">Credit Card Number</label>
				<input
					placeholder="Enter your credit card number"
					options={{ creditCard: true }}
					id="number-input"
					name="number-input"
					className="text-input"
					maxLength="16"
				/>
				<label className="input-label">Card Holder Name</label>
				<input
					type="text"
					placeholder="Enter card holder name"
					className="text-input"
					maxLength="30"
				/>
				<div className="date-and-csv" style={{ display: "flex" }}>
					<div
						style={{ display: "flex", flexDirection: "column", width: "50%" }}
					>
						<label className="input-label">Expiration Date</label>
						<input
							type="month"
							// type="date"
							placeholder="Enter expiration date"
							className="text-input"
							style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
						/>
					</div>
					<div
						style={{ display: "flex", flexDirection: "column", width: "50%" }}
					>
						<label className="input-label">CVV Security Code</label>
						<input
							options={{
								numeral: "true",
							}}
							placeholder="Enter CVV"
							maxLength="3"
							className="text-input"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreditCard;
