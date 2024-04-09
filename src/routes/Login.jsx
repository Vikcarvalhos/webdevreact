import {useRef} from 'react'
import Produto from './Produto'

function Login(){

    //useRef ele retorna uma rereferencia e um elemento
    const usuario =useRef();
    const senha =useRef();
    
    //sessionStorage-pegando os dados usuario e senha na sessao
    const getUsuario = sessionStorage.getItem('usuario');
    const getSenha= sessionStorage.getItem('senha');
    
    //criando handleSubmit
    const handleSubmit =() =>{
    if(usuario.current.value =="Admin" && senha.current.value =="12345"){

        //criando criptografia 
        let token=
        Math.random().toString(16).substring(2)+
        Math.random().toString(16).substring(2);

        sessionStorage.setItem('usuario','Admin');
        sessionStorage.setItem('senha',token);
    }else{
        alert('Usuario/ senha invalidos')
    }

    }

    return(
    <>
    {getUsuario && getSenha ?(
        <Produto/>

    ):(
    <form onSubmit={handleSubmit}>
        <p>
            Usuario:
            <input type="text" placeholder="Digite seu usuario" ref={usuario}/>
        </p>
        <p>
            Senha:
            <input type="password" placeholder="Digite sua senha" ref={senha}/>
        </p>
        <button type="submit">Entrar</button>

    </form>
      )}
    </>
  
    )
}
export default Login