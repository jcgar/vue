import MyLeftNav from '@/components/myLeftNav';
import MyRightNav from '@/components/myRightNav';

const options = {
  MyLeftNav,
  MyRightNav,
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
