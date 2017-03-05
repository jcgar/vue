import MyLeftNav from '@/components/myLeftNav';
import MyRightNav from '@/components/myRightNav';
import MySelect from '@/components/mySelect';
import PeopleList from '@/components/peopleList';
import CarSearch from '@/components/carSearch';
import InputMarca from '@/components/inputMarca';
import InputModelo from '@/components/inputModelo';
import InputPrecio from '@/components/inputPrecio';
import InputProvincia from '@/components/inputProvincia';
import InputCombustible from '@/components/inputCombustible';

/*
import BotonBuscar from '@/components/botonBuscar';
*/
const options = {
  MyLeftNav,
  MyRightNav,
  MySelect,
  PeopleList,
  CarSearch,
  InputMarca,
  InputModelo,
  InputProvincia,
  InputPrecio,
  InputCombustible,
/*  BotonBuscar,
  */
};

options.install = (Vue) => {
  Object.keys(options).forEach((key) => {
    const componentInstaller = options[key];

    if (componentInstaller && key !== 'install') {
      Vue.use(componentInstaller);
    }
  });
};

export default options;
