import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function CencellationPolicy() {
    return (
<div>
    <Header/>
  <br />
  <br />
  <br />
  <div className="container">
    <h3>Cancellation Policy
    </h3>
    <p>The Assignment Writing preserves all rights to drop your order any time under severe circumstances. We feel
      pride in maintaining that we never reject any order due to its difficulty level and deadlines. Nevertheless,
      we hold the independent rights of rejection or order cancellation.
    </p>
    <h4>Cancellation applies under certain conditions:
    </h4>
    <ol>
      <li>
        <p>If we fail to present our clients with suitable subject writers
        </p>
      </li>
      <li>
        <p>If the customer violates the terms and conditions of the agreement
        </p>
      </li>
      <li>
        <p>If we are incompetent to fulfill your order within the set time
        </p>
      </li>
      <li>
        <p>If any unexpected event occurs on our end due to which the document cannot be completed
        </p>
      </li>
    </ol>
    <h3>NOTE:
    </h3>
    <p>In the case, if the order is revoked even after its approval due to any unforeseen event or other than the
      reason of rupturing the contract, we are responsible for presenting a complete refund
    </p>
  </div>
  <Footer/> 
</div>

    )
}
