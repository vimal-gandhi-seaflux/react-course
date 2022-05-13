import './ExpenseItem.css';

// function ExpenseItem() {
//   const  expenceDate = new Date(2001,12,1);
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 294.67;
  
//   return (
//     <div className="expense-item">
//       <div>{expenceDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;



function ExpenseItem(props) {


  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick ={ () => {console.log('Hello world') }}>vv</button>
      </div>
    </div>
  );
}
export default ExpenseItem;

