import React from 'react';
import { string, shape } from 'prop-types';
import { GridRow, GridColumn, Text } from '../../styles/styles';
import { constants } from '../../assets/constants';
import SupportAvatar from '../support-avatar/support-avatar';

// eslint-disable-next-line no-unused-vars
function SupportContactComponent({ data }) {
  // const supportContact = data;

  return (
    <>
      <GridRow>
        <Text
          color="grey"
          bold
        >
          {constants.supportContactTitle}
        </Text>
      </GridRow>
      <GridRow>
        <GridColumn size="1">
          <SupportAvatar />
        </GridColumn>
        <GridColumn size="1" />
        <GridColumn size="1" />
      </GridRow>
    </>
  );
}

SupportContactComponent.propTypes = {
  data: shape({
    name: string,
    email: string,
  }),
};

SupportContactComponent.defaultProps = {
  data: {
    name: '',
    email: '',
  },
};

export default SupportContactComponent;
