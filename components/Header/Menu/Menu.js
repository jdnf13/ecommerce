import React from 'react';
import {Container, Menu as MenuWeb, Grid, Icon, Label, GridColumn, Button} from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from '../../Modal/BasicModal/BasicModal';
import { useState } from 'react';
import Auth from '../../Auth/Auth';
import useAuth from '../../../hooks/useAuth';


export default function Menu() {
    const [showModal, setshowModal] = useState(false);
    const [titleModal, settitleModal] = useState('Inicia Sesión');
    const {auth, logout} = useAuth();

    const onShowModal = () => setshowModal(true);
    const onCloseModal = () => setshowModal(false);


  return (
    <div className='menu'>
        <Container>
            <Grid>
                <Grid.Column className='menu__left' width={6}>
                   <MenuLineas/>
                </Grid.Column>
                <Grid.Column className='menu__right' width={10}>                    
                    {auth ? <Logout logout={logout} auth={auth}/>:<MenuLogin onShowModal={onShowModal}/>}                    
                </Grid.Column>
            </Grid>
        </Container>
        <BasicModal show={showModal} setShow={setshowModal} title={titleModal} size='small'>
            <Auth onCloseModal={onCloseModal} settitleModal={settitleModal}/>
        </BasicModal>
    </div>
  )
}

function MenuLineas(){
    return(
        <MenuWeb>
            <Link href="/premium">
                <MenuWeb.Item as='a'>Premium</MenuWeb.Item>
            </Link>
            <Link href="/tradicional">
                <MenuWeb.Item as='a'>Tradicional</MenuWeb.Item>
            </Link>
            <Link href="/origen">
                <MenuWeb.Item as='a'>Origen</MenuWeb.Item>
            </Link>
        </MenuWeb>
    );
}

function MenuLogin(props){
    const {onShowModal} = props
    return(
        <MenuWeb>
            <MenuWeb.Item onClick={onShowModal}>
                <Icon name='user outline'/>
                Mi cuenta
            </MenuWeb.Item>
        </MenuWeb>
    );
}

function Logout(props) {
    const {logout, auth} = props;
    return(
        <MenuWeb>
            <MenuWeb.Item>
                <Icon name='user outline'/>
                {auth.name}
            </MenuWeb.Item>
            <MenuWeb.Item onClick={logout}>
                <Icon name='sign-out'/>
                Cerrar Sesión
            </MenuWeb.Item>
        </MenuWeb>
    )
}