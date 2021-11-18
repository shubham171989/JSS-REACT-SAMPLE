import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyFirstComponent = (props) => (
  <div>
    <p>Vishal Yadav</p>
    <Text field={props.fields.heading} />
  </div>
);

export default MyFirstComponent;
