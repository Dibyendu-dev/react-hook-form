
const FieldSet = ({label, children}) => {
  return (
    <fieldset className="w-full m-2 border-none p-0 ">
     {label && <legend className="text-lg font-bold mb-2">{label}</legend>}
     <div className="flex flex-col justify-between self-start">{children}</div> 
    </fieldset>
  )
}

export default FieldSet