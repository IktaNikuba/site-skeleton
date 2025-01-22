import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';

export default {
  plugins: [
    autoprefixer(),
    csso({
      restructure: false
    })
  ]
};
