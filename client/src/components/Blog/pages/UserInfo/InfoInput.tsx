
type Props = {
  label: string
  input: string
}
function InfoInput({ label, input}: Props) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <span className="text-gray-600">{label}</span>
      <p className="text-gray-800">{input}</p>
    </div>
  )
}

export default InfoInput