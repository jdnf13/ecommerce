import React from 'react';
import {Container, Menu as MenuWeb, Grid, Icon, Label, GridColumn} from 'semantic-ui-react';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='menu'>
        <Container>
            <Grid>
                <Grid.Column className='menu__left' width={6}>
                   <MenuLineas/>
                </Grid.Column>
                <Grid.Column className='menu__right' width={10}>
                    <MenuLogin/>
                </Grid.Column>
            </Grid>
        </Container>
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

function MenuLogin(){
    return(
        <MenuWeb>
            <MenuWeb.Item>
                <Icon name='user outline'/>
                Usuario
            </MenuWeb.Item>
        </MenuWeb>
    );
}