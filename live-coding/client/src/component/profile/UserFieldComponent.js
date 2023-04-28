export default function UserFieldComponent({fieldName, fieldValue}) {

  if(fieldValue === undefined || fieldValue === '') {
    return (<p>{fieldName}: <input type="text" /></p>)
  } else {
    return (<p>{fieldName}: {fieldValue}</p>)
  }
}