const TextField = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input {...props} type="text" className=""/>
    </div>
  )
}

export default TextField
