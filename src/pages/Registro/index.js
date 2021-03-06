import React, {useState} from 'react';
import './styles.css';
import heroislogo from '../../assets/heroi5.png';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft}from 'react-icons/fi';
import api from '../../services/api';

export default function Registro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs', data);
            alert(`Cadastro realizado com sucesso seu ID de acesso é: ${response.data.id} Guarde bem!!`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro')
        }
       
    }
    return(
        <div className="registro-container">
            <div className="content">
                <section>
                <img src={heroislogo} alt="Seja o Herói"/>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                        <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#3f48cc"/>Voltar
                        </Link>
                </section>
                <form onSubmit={handleRegister}>
                        <input required placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                        <input required type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input required placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)}/>
                        
                        <div className="input-group">
                          <input required  placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                          <input required  placeholder="UF" style={{width: 80}} value={uf} onChange={e => setUf(e.target.value)}/>  
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
            </div>
        </div>
         ) 
}