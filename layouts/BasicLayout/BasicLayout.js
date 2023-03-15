import { Container } from 'semantic-ui-react';
import Header from '../../components/Header/Header';
import classNames from 'classnames'; //se puede istalar la libreria classNames para manejar varios className de scss

export default function BasicLayout(props) {
  
    const {children, className} = props;
    
  return (
    <Container 
      fluid
      className={classNames('basic-layout',{ //en el layout principal el className va a tomar los valores de classNames si estos llegan por props. de lo contrario usa las class default de basicLayout
        [className]:className, //Si tenemos className en el componente hijo, toma todas sus clases para ese componente y no el del padre
      })}
      >
        <Header/>
        <Container className='content'>{children}</Container>        
    </Container>
  )
}
