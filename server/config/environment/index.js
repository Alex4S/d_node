/* eslint-disable global-require */
import _ from 'lodash';

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  graphql: {
    port: 8000
  },
  mongodb: {
    url: 'mongodb://alex4s:111111@ds017195.mlab.com:17195/d_node'
  }
};

export default _.extend(config, require(`./${config.env}`).default);
