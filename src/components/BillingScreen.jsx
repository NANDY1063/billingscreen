import React, { useState } from 'react';
import '../App.css'
export default function App() {
  const [activeTab,setActiveTab] =useState('Billing');
  const handleTabChange = (tab) =>{
    setActiveTab(tab);
  }
  const [showCashDenominationModal, setShowCashDenominationModal] = useState(false);
  const toggleCashDenominationModal = () => {
    setShowCashDenominationModal(!showCashDenominationModal);
  };
  const [showGiftMergeModal, setShowGiftMergeModal] = useState(false);
  const toggleGiftMergeModal = () => {
    setShowGiftMergeModal(!showGiftMergeModal);
  }
  const [showDailyIncentiveModal, setShowDailyIncentiveModal] = useState(false);
  const toggleDailyIncentiveModal = () => {
    setShowDailyIncentiveModal(!showDailyIncentiveModal);
  };
  const [showAdvanceModal, setShowAdvanceModal] = useState(false);
  const toggleAdvanceModal = () => {
  setShowAdvanceModal(!showAdvanceModal);
  };
  const [showParkingTokenModal, setShowParkingTokenModal] = useState(false);
  const toggleParkingTokenModal = () => {
  setShowParkingTokenModal(!showParkingTokenModal);
  };
  const [showPendingBillModal, setShowPendingBillModal] = useState(false);
  const togglePendingBillModal = () => {
  setShowPendingBillModal(!showPendingBillModal);
  };

return (
<>
  <div className="row bg-primary">
  <div className="col-md-12 py-2 d-flex justify-content-center align-item-center">
    <button className="btn btn-primary me-4"><i className="fas fa-home"></i></button>
    <button className="btn btn-primary me-4">Stk F1</button>
    <button className="btn btn-primary me-4">Last Bit F2</button>
    <button className="btn btn-primary me-4">Gift Card F3</button>
    <button className="btn btn-primary me-4">Set Item F4</button>
    <button className="btn btn-primary me-4">Discount F5</button>
    <button className="btn btn-primary me-4">Set-Cash F6</button>
    <button className="btn btn-primary me-4">Group F7</button>
    <button className="btn btn-primary me-4">Emp Tar F8</button>
    <button className="btn btn-primary"><i className="fas fa-sign-out-alt"></i></button>
  </div>
  </div>
 
{/* Main Content */}
<div className="row">
  
  {/* Billing Section */}  
  {/* Nav Bar  */}
  <div className="col-md-8 bg-light p-3 h-100"  style={{border:'1px solid #ccc' }}>
    <h6 className='text-center '>Billing Screen</h6>
    <div className="col-md-12">
    <ul className="nav nav-tabs mb-4">
      <li className="nav-item"><button className={`nav-link ${activeTab === 'VIP' ? 'active' : ''}`} onClick={() => handleTabChange('VIP')}>Vip</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Gift' ? 'active' : ''}`} onClick={() => handleTabChange('Gift')}>Gift</button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Adv' ? 'active' : ''}`}onClick={() => handleTabChange('Adv')} >Adv </button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Customer' ? 'active' : ''}`} onClick={() => handleTabChange('Customer')}>Customer</button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'EC' ? 'active' : ''}`} onClick={() => handleTabChange('EC')}>Ecno</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Exchange' ? 'active' : ''}`}onClick={() => handleTabChange('Exchange')}>Exchange</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Packing Slip' ? 'active' : ''}`}onClick={() => handleTabChange('Packing Slip')}>Packing Slip</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Draft' ? 'active' : ''}`}onClick={() => handleTabChange('Draft')}>Draft</button></li>
    </ul> 
    </div>
  
    <div className="row" >
      {activeTab === 'VIP' && (
      <>
        <div className="col-md-2">
          <select className="form-select">
            <option>Select Card Mode</option>
            <option>VIP</option>
            <option>MD</option>
            <option>Staff</option>
          </select>
        </div>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Card Number' /></div>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Purchase Value'/></div>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Pending GV Value'/></div>
      </>
      )}
      {activeTab === 'Gift' && (
      <>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Gift Voucher Number'/></div> 
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Available Gift Amount'/></div> 
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Deduct Amount'/></div> 
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Balance Amount'/></div> 
        <div className="col-md-2"><button className='btn - btn-outline-primary'onClick={toggleGiftMergeModal}> Gift Merge </button></div> 
      </>
      )}
        
        {/* Showform for gift*/}
        {showGiftMergeModal && (
        <div className="modal-overlay" onClick={toggleGiftMergeModal}>
        <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h6 className="modal-title mb-3">Gift Merge Details</h6>
            <button type="button" className="btn-close"aria-label="Close" onClick={toggleGiftMergeModal}></button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select className="form-select">
              <option value="">Select Branch</option>
              <option value="CBE3">CBE3</option>
              <option value="HSR">HSR</option>
              <option value="KGR">KGR</option>
              </select>
            </div>
            <div className="col-md-6 "><input type="text" className="form-control" placeholder='Mode'/></div>
            <div className="col-md-6 mt-3"><input type="text" className="form-control" placeholder='Gift Voucher Number' /></div>
            <div className="col-md-6 mt-3"><input type="text" className="form-control" placeholder='Vocher Value' /></div>
            <div className="col-md-6 mt-3"><input type="text" className="form-control" placeholder='New Voucher Value'/></div>
            <div className="col-md-6 mt-3"><button className="btn btn-outline-primary">+</button></div>
          </div>
          <hr/>
        <table className="table table-bordered ">
          <thead><tr>
            <th className="text-center">Voucher Year</th>
            <th className="text-center">Voucher No</th>
            <th className="text-center">Voucher Value</th>
          </tr></thead>
          <tbody><tr>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
          </tr></tbody>
        </table>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-success me-2">Save</button>
          <button className="btn btn-secondary" onClick={toggleGiftMergeModal}>Close</button>
        </div>
        </div>
        </div>
        )}

      {activeTab === 'Adv' && (
      <>
        <div className="col-md-2 "><input type="text" className="form-control" placeholder='Adv A/C Year No'/></div>
        <div className="col-md-2 "><input type="text" className="form-control" placeholder='Customer Number'/></div>
        <div className="col-md-auto "><button className='btn  btn-outline-primary'>+</button></div>
        <div className="col-md-1"><input type="tel" className="form-control" placeholder='OTP'/></div>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Received Amount'/></div>
        <div className="col-auto d-flex">
          <button className='btn btn-outline-success me-2 '> Save </button>
          <button className='btn btn-outline-danger'> Cancel </button>
        </div>
      </>
      )}
      {activeTab === 'Customer' && (
      <>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Name '/></div>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Mobile No'/></div>
        <div className="col-md-4"><input type="text" className="form-control" placeholder='Address '/></div>
        <div className="col-md-1"><input type="text" className="form-control" placeholder='City '/></div>
        <div className="col-md-1"><input type="text" className="form-control" placeholder='Pincode'/></div>
        <div className="col-md-1"><input type="t" className="form-control" placeholder='Ref Ecno'/></div>
        <div className="col-md-1 "><button className='btn  btn-outline-primary'>+</button></div>
      </>
      )}
      {activeTab === 'EC' && (
      <>
        <div className="col-md-1">
          <input type="text" className="form-control" placeholder='Ecno No'/>
        </div>
        <div className="col-md-2">
          <input type="text" className="form-control" placeholder='Purchase Value'/>
        </div>
        <div className="col-md-2 ">
          <input type="text" className="form-control" placeholder='Target Value'/>
        </div>
      </>
      )}
      {activeTab === 'Exchange' && (
      <>
        <div className="col-md-2"><input type="text" className="form-control" placeholder='Exchange Bill'/></div>
        <div className="col-md-2"><input type="tel" className="form-control" placeholder='Exchange Amount'/></div>
        <div className="col-md-2"><input type="tel" className="form-control" placeholder='Deduct Amount'/></div>
        <div className="col-md-2"><input type="tel" className="form-control" placeholder='Balance Amount'/></div>
      </>
      )}
      {activeTab === 'Packing Slip' && (
      <>
        <div className="col-md-1"><input type="tel" className="form-control" placeholder='Year No'/></div>
        <div className="col-md-1"><input type="tel" className="form-control" placeholder='Ecno'/></div>
        <div className="col-md-1"><input type="tel" className="form-control" placeholder='Qty'/></div>
        <div className="col-md-1"><input type="tel" className="form-control" placeholder='Mrp'/></div>
      </>
      )}
      {activeTab === 'Draft' && (
      <>
        <div className="col-md-2  "><input type="tel" className="form-control" placeholder='Mobile no'/></div>
        <div className="col-md-1 "><button className='btn  btn-outline-primary'>+</button></div>
      </>
      )}
    </div><hr></hr>

    {/* Product Details */}
    <div className="row mb-3 mt-3">
    <div className="col-md-12">
    <div className="row g-2">
      <div className="col-sm-1 d-flex flex-column align-items-center">
        <label className="form-label fw-small">Discount Mode</label>
        <select className="form-select">
          <option>Choose</option>
          <option>Cash</option>
          <option>Gift Voucher</option>
        </select>
      </div>
      <div className="col-sm-2 d-flex flex-column align-items-center">
        <label className="form-label">Item Code</label>
        <input type="text" className="form-control" />
      </div>
      <div className="col-sm-2 d-flex flex-column align-items-center">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">E.C</label>
        <input type="text" className="form-control "style={{ width: '70px' }} />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">M.Cm</label>
        <input type="text" className="form-control" style={{ width: '70px' }} />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">Qty</label>
        <input type="tel" className="form-control" style={{ width: '70px' }} />
      </div>
      <div className="col-sm-1 d-flex flex-column align-items-center">
        <label className="form-label">MRP Price</label>
        <input type="tel" className="form-control" />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">Dis %</label>
        <input type="tel" className="form-control"style={{ width: '70px' }} />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">DisVal</label>
        <input type="tel" className="form-control" style={{ width: '70px' }}/>
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">Mt.Less</label>
        <input type="tel" className="form-control"style={{ width: '70px' }} />
      </div>
      <div className="col-sm-1 d-flex flex-column align-items-center">
        <label className="form-label">Total Price</label>
        <input type="tel" className="form-control" />
      </div>
      <div className="col-auto d-flex flex-column align-items-center">
        <label className="form-label">No of Pack</label>
        <input type="tel" className="form-control" style={{ width: '80px' }} />
      </div>
    </div>
    </div>
  </div>
        
  {/* Item Details Table */}
  <h6 className='mt-4'>Product Details</h6>
    <table className="table table-bordered">
      <thead><tr>
        <th class="fw-normal">Item Code</th>
        <th class="fw-normal">Product Name</th>
        <th class="fw-normal">E.C</th>
        <th class="fw-normal">M.Cm</th>
        <th class="fw-normal">Qty</th>
        <th class="fw-normal">MRP</th>
        <th class="fw-normal">Dis %</th>
        <th class="fw-normal">DisVal</th>
        <th class="fw-normal">Mt.Less</th>
        <th class="fw-normal">Total</th>
      </tr></thead>
      <tbody><tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr></tbody>
    </table>
          
    {/* Total Summary */}
    <div className="row mt-5">
      <div className="col-md-6 text-start">
        <span>Total Qty : 0</span>
        <span className="ms-3">Total Value : ₹ 0</span>
        <span className='ms-3'>Total Net Amount : ₹ 0</span>
      </div>
      <div className="col-md-6 text-end">
        <button className="btn btn-success me-5">Submit</button>
        <button className="btn btn-danger me-5">Cancel</button>
      </div>
    </div>

    <div className="row mt-5 ">
      <div className="col-md-2 mt-5">
      <h6> Previous Bill</h6>
        <label className="form-label">Bill Number</label>
        <input type="text" className="form-control" value=" "   />
      </div>
      <div className="col-md-2 mt-4">
        <label className="form-label mt-5 ">Bill Date</label>
        <input type="text" className="form-control" value="  "   />
      </div>
    </div>
  </div>
               
  {/* Payment Section (35%) */}
  <div className="col-md-4 bg-light p-3" style={{border:'1px solid #ccc' }}>
  
    {/* Input Fields */}
    <div className="row mb-3">
      <h6 className='text-center'>Payment</h6>
      <div className="col-sm-3">
        <input type="text" className="form-control" placeholder="Scan Bill"   />
      </div>
    </div>
          
    {/* Details Table */}
    <h6>Details</h6>
    <table className="table table-bordered">
      <thead><tr>
        <th class="fw-normal">Bill Number</th>
        <th class="fw-normal" >Total</th>
        <th class="fw-normal">Billed Date</th>
        <th class="fw-normal">Cashier Name</th>
        <th class="fw-normal">Club Card</th>
        <th class="fw-normal" >Discount</th>
      </tr></thead>
      <tbody><tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr></tbody>
    </table>
          
    {/* Showform for Cash Denomination */}
    {showCashDenominationModal && (
    <div className="modal-overlay" onClick={toggleCashDenominationModal}>
    <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h6 className="modal-title border-bottom w-100">Cash Denomination</h6>
        <button type="button"  className="btn-close" aria-label="Close"onClick={toggleCashDenominationModal} ></button>
      </div>
      <div className="row">
        <div className="col-md-6 mt-3">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>₹500</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>₹200</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>₹100</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>₹50</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>₹20</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>₹10</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>Coins</td>
                <td>x</td>
                <td><input type="number" className="form-control" /></td>
                <td>₹0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Other Payment Methods */}
        <div className="col-md-6 mt-3">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Ad-Recd</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Ad-Return</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Gift Voucher</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Card</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Cheque/DD</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Dly Incentive Issue</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>Staff Purchase</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>UPI Amount</td>
                <td><input type="text" className="form-control" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end ">
        <span className=" me-auto">Total Amount: ₹0</span>
        <button className="btn btn-success me-2">Save</button>
        <button className="btn btn-secondary" onClick={toggleCashDenominationModal}>Close</button>
      </div>
    </div>
    </div>
    )}

    <div className=" mt-4">
      <h6>Payment Summary</h6>
      <table className="table table-bordered">
      <thead><tr>
        <th>Cash</th>
        <th>UPI Payemnt</th>
        <th>Card</th>
      </tr></thead>
      <tbody>
      <tr>
        <td>Received Amount <input type="number" id="receivedAmount" className="form-control"/></td>
        <td>Payment Device 
        <select id="paymentDevice" className="form-select">
            <option value="gpay">Gpay</option>
            <option value="phonepe">Phonepe</option>
            <option value="other">Paytm</option>
          </select></td>
        <td>Card Type
        <select id="cardType" className="form-select">
            <option value="debit">Debit Card</option>
            <option value="credit">Credit Card</option>
            <option value="other">Other</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Balance Amount <input type="tel" id="receivedAmount" className="form-control" /></td>
        <td>To Pay Online <input type="tel" id="receivedAmount" className="form-control" /> </td>
        <td>Contact less Payment <input type="tel" id="receivedAmount" className="form-control" /></td>
   
      </tr>
      <tr>
        <td className="text-center" colSpan={3}>Total Amount : </td>
      </tr>      
    </tbody></table>
    </div>

    {/* Buttons */}
    <div className="row mt-4">
      <div className=" d-flex justify-content-end gap-2">
        <button className='btn btn-success' > Paid</button>
        <button className='btn btn-danger '> Cancel</button>
      </div>
    </div>

    {/* Showform for Daily incentives */}
    {showDailyIncentiveModal && (
    <div className="modal-overlay" onClick={toggleDailyIncentiveModal}>
    <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h6 className="modal-title border-bottom w-100">Daily Incentive Details</h6>
        <button type="button" className="btn-close" aria-label="Close" onClick={toggleDailyIncentiveModal}></button>
      </div>
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="incentiveType" id="pettyCash" value="Petty Cash" />Petty Cash
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="incentiveType" id="cashier" value="Cashier" />Cashier
          </div>
          <div className="mt-3">
            <label className="form-label">Branch</label> 
            <select className="form-select">
              <option value="">Select Branch</option>
              <option value="CBE3">CBE3</option>
              <option value="HSR">HSR</option>
              <option value="KGR">KGR</option>
            </select>
            <label className="form-label mt-3">Employee ID/Card</label>
            <input type="text" className="form-control" />
            <label className="form-label mt-3">Incentive Amount</label>
            <input type="tel" className="form-control" />
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <h6>Employee Details</h6> 
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success me-2">Save</button>
        <button className="btn btn-secondary" onClick={toggleDailyIncentiveModal}>Close</button>
      </div>
    </div>
    </div>
    )}
  
    {/* Showform for advance */}
    {showAdvanceModal && (
    <div className="modal-overlay" onClick={toggleAdvanceModal}>
    <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h6 className="modal-title border-bottom w-100">Advance Details</h6>
        <button type="button" className="btn-close" aria-label="Close" onClick={toggleAdvanceModal}></button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label className="form-label mt-2">Company / Name</label>
          <input type="text" className="form-control" />
          <label className="form-label mt-2">Address</label>
          <input type="text" className="form-control" />
          <label className="form-label mt-2">Contact Person</label>
          <input type="text" className="form-control" />
          <label className="form-label mt-2">Phone No</label>
          <input type="tel" className="form-control" />
          <button className="btn btn-primary mt-4 mb-3">Send OTP </button><br></br>
          <label className="form-label mt-2">Enter OTP:</label>
          <input type="number" className="form-control" />
          <label className="  form-label mt-2">Alternative No</label>
          <input type="tel" className="form-control" />
          
        <div className="col-mb-6">
          <label className="form-label mt-2">Payment Mode</label><br></br>
            <div className="form-check form-check">
              <input className="form-check-input" type="radio" name="paymentMode" id="cash" value="Cash" />Cash
              <label className="form-check-label" htmlFor="cash"></label>
            </div>
            <div className="form-check form-check">
              <input className="form-check-input" type="radio" name="paymentMode" id="card" value="Card" />
              <label className="form-check-label" htmlFor="card">Card</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="paymentMode" id="online" value="Online Payment" />
              <label className="form-check-label" htmlFor="online">UPI Payment</label>
            </div>
        </div>
        </div>
        <div className="col-md-6">
          <label className="form-label mt-2 ">A/C Year</label>
          <input type="text" className="form-control" placeholder="2024-2025" />
          <label className="form-label mt-2">Adv. Number</label>
          <input type="text" className="form-control" />      
          <label className="form-label mt-2">Adv. Amount</label>
          <input type="number" className="form-control" />   
          <label className="form-label mt-2">Section</label>
          <input type="text" className="form-control" /> 
          <label className="form-label mt-2">Order Taken By</label>
          <input type="text" className="form-control" />    
          <label className="form-label mt-2">Order Value</label>
          <input type="number" className="form-control" />
          <label className="form-label mt-2">Due Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success me-2">Confirm</button>
          <button className="btn btn-secondary" onClick={toggleAdvanceModal}>Close</button>
        </div>
      </div>
    </div>
    </div>
    )}
  
    {/* showform for parking token */}
    {showParkingTokenModal && (
    <div className="modal-overlay" onClick={toggleParkingTokenModal}>
    <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header d-flex justify-content-between align-items-center mb-4 border-bottom">
        <h6 className="modal-title ">Parking Token Details</h6>
        <button type="button" className="btn-close" aria-label="Close" onClick={toggleParkingTokenModal}></button>
      </div>
      <div className="row ">
        <div className="col-md-12 d-flex gap-3">
          <label className="form-label">Amount</label>
          <input type="number" className="form-control" />
          <label className="form-label">Bill No.</label>
          <input type="text" className="form-control" />
          <label className="form-label">Mobile No.</label>
          <input type="tel" className="form-control" />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success mt-3 me-2">Confirm</button>
          <button className="btn btn-secondary mt-3" onClick={toggleParkingTokenModal}>Close</button>
        </div>
          
      </div>
    </div>
    </div>
    )}
  
    {/* Showform for Pending bill */}
    {showPendingBillModal && (
    <div className="modal-overlay" onClick={togglePendingBillModal}>
    <div className="modal-content bg-white p-4 rounded shadow" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h6 className="modal-title border-bottom w-100">Pending Bill Details</h6>
        <button type="button" className="btn-close" aria-label="Close" onClick={togglePendingBillModal}></button>
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-md-4">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" />
        </div>
        <div className="col-md-4">
          <label className="form-label">ECNO</label>
          <input type="text" className="form-control" placeholder="Enter ECNO" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead><tr>
              <th className='text-center'>Bill No</th>
              <th className='text-center'>Amount</th>
              <th className='text-center'>Time</th>
              <th className='text-center'>Exchange</th>
            </tr></thead>
            <tbody><tr>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
              <td className='text-center'>-</td>
            </tr></tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-between align-items-center">
          <div>
            <span>TOTAL BILL:</span>
            <span className="ms-2">₹0</span>
            <span className='ms-5'>TOTAL AMOUNT:</span>
            <span className="ms-2">₹0</span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success me-2">Save</button>
        <button className="btn btn-secondary" onClick={togglePendingBillModal}>Cancel</button>
      </div>
    </div>
  </div>
)}  
  </div>
</div>

{/* Footer  */}
<footer className="footer text-center fixed-bottom shadow-lg" style={{ zIndex: 1000 }}>
<div className=' d-flex justify-content-center  mb-3 mt-3 gap-5' >
       <button className="btn btn-warning" onClick={toggleCashDenominationModal}> Cash Denomination</button>
        <button className="btn btn-warning" onClick={toggleAdvanceModal}>Advance</button>
        <button className='btn btn-warning' onClick={toggleDailyIncentiveModal} > Daily Incentives  </button>
        <button className='btn btn-warning'onClick={toggleParkingTokenModal} > Parking Token  </button>
        <button className='btn btn-warning' onClick={togglePendingBillModal}> Pending Bill </button>
</div>
<div className='bg-primary py-1 text-white text-center'>
<p className="mb-0">Copyright © Space Textiles [P] Ltd</p>
</div>
</footer>
</>
);
}