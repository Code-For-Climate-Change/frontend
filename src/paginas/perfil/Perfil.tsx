import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import User from '../../models/User';
import { busca, buscaId } from '../../services/Service';
import { addToken } from '../../store/token/Actions';
import { UserState } from '../../store/token/Reducer';
import './Perfil.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Perfil() {

    let history = useNavigate()

    const dispatch = useDispatch()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const state = useSelector<UserState, any>(
        (state) => state
    )


    console.log(id, token, state)

    const [user, setUser] = useState<User>({
        id: +id,
        nome: '',
        dataNascimento: '',
        tipoUsuario: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    // Método para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        try {
            await busca(`/usuarios/${id}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        } else {
            alert('id inexistente')
        }
    }, [id])
    

    return (
        <div className="teste">
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
                {/* <Link to="/editar" className="text-decorator-none">
                    <Button variant="contained" color="info" >
                        Editar Perfil
                    </Button>
                </Link> */}
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{user.nome}</h1>
                    <h3>{user.usuario}</h3>
                    <hr />
                </Box>
            </Box>
        </Box>
        </div>
    )
}

export default Perfil