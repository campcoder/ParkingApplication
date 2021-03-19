import React from "react";
import "./Payment.css";
function Payment() {
  return (
    <div class="wrapperp">
      <h2>Payment Form</h2>

      <div class="amountp">
        <center>
          Total amount <br />
          <br />
          INR 128
        </center>
      </div>
      <form method="POST">
        <h4>Account</h4>
        <div class="input-groupp">
          <div class="input-boxp">
            <input type="text" placeholder="Full Name" required class="namep" />
          </div>
        </div>
        <div class="input-groupp">
          <div class="input-boxp">
            <input
              type="tel"
              placeholder="Card Number"
              required
              class="namep"
            />
          </div>
        </div>
        <div class="input-groupp">
          <div class="input-boxp">
            <input type="tel" placeholder="Card CVC" required class="namep" />
          </div>
          <div class="input-boxp">
            <input type="date" class="datep" name="calendar" />
          </div>
        </div>
        <div class="input-groupp">
          <div class="input-boxp">
            <h4>Payment Details</h4>
            <input type="radio" name="pay" id="bc1" checked class="radiop" />
            <label for="bc1">
              <span>
                <i class="fa fa-cc-visa"></i> Credit Card
              </span>
            </label>
            <input type="radio" name="pay" id="bc2" class="radiop" />
            <label for="bc2">
              <span>
                <i class="fa fa-cc-paypal"></i> Paypal
              </span>
            </label>
          </div>
        </div>

        <div class="input-groupp">
          <div class="input-boxp">
            <button class="buttonp" type="submit">
              PAY NOW
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
