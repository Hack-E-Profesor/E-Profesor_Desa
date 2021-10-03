import TextField from "../../components/Atoms/TextField"

const SingIn = () => {
  return (
    <div className="bg-fixed h-screen text-center" style={{backgroundImage:"url('./source/fondo.png')", backgroundSize:"contain",backgroundRepeat:'no-repeat'}}>
     Iniciar Seccion
     <TextField label="Correo" />
    </div>
  )
}
export default SingIn
