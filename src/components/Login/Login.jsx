import React from 'react'
import bg from '../../assets/background.png';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { getGithubInfo, addLugar, getLugares } from '../../services/api';

const Login = () => {
  const [usuario, setUsuario] = React.useState("");
  const [gitUser, setGitUser] = React.useState("");
  const [lugar, setLugar] = React.useState("");
  const [apiPlaces, setApiPlaces] = React.useState("");

  const getApiInfo = async () => {
    try {
      let result = await getGithubInfo(usuario);
      setGitUser(result.data)
    } catch (error) {
      alert("nao tem")
    }
  }

  const handleClick = () => {
    if(usuario) {
      getApiInfo()
    }
  }

  const addGetLugar = async () => {
    await addLugar(usuario, lugar);
    let result = await getLugares(usuario);
    setApiPlaces(result.data)
    setLugar("")
  }

  const handleLugarClick = () => {
    addGetLugar();
  }

  return (
    
    <div style={{backgroundImage:`url(${bg})`, width: '100vw', height: '100vh', overflow: "hidden"}}>
      <div style={{background: 'white', width: '900px', height: '400px', margin: '10% auto'}}>
        {!gitUser && 
          <>
          
          <h4 style={{marginTop: "5rem", lineHeight: '60px'}}>Digite aqui seu usuário do github...</h4>
          <div style={{width: "80%", margin: "2rem auto"}}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Usuário do github..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={handleClick}>Pesquisar</Button>
            </InputGroup.Append>
          </InputGroup>
          </div>
          </>
         } 
         {gitUser && 
          <>
          <div style={{display: "flex"}}>
          
          <img src={gitUser.avatar_url} alt="github avatr" style={{width: "70px", borderRadius: "50%"}}/>
          <h4>Olá, {usuario}</h4>
          </div>
          
          <h4 style={{marginTop: "10px", lineHeight: '60px'}}>Adicione aqui um lugar que quer conhecer em 2021...</h4>
          <div style={{width: "80%", margin: "2rem auto"}}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Lugar legal..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={handleLugarClick}>Adicionar</Button>
            </InputGroup.Append>
          </InputGroup>
          {apiPlaces && apiPlaces.places.map((place)=> <div>{place}</div>)}
          </div>
          </>
         } 
      </div>
    </div>
  )
}

export default Login;