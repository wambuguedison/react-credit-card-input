import React from "react";
import "./CreditCard.css";

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
						<label className="input-label">CVC Security Code</label>
						<input
							options={{
								numeral: "true",
							}}
							placeholder="Enter CVC"
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
