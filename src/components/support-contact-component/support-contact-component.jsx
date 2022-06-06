import React from 'react';
import { string, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GridRow, GridColumn, Text } from '../../styles/styles';
import { constants } from '../../assets/constants';
import SupportAvatar from '../support-avatar/support-avatar';

const SupportContactComponent = ({ data }) => {
  const supportContact = data;

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
        <div aria-hidden="true">
          <GridColumn size="1">
            <SupportAvatar />
          </GridColumn>
        </div>
        <GridColumn size="1">
          <GridRow>
            <Text
              bold
            >
              {supportContact.name}
            </Text>
          </GridRow>
          <GridRow>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text
              color="grey"
              padding="0 2%"
            >
              {supportContact.email}
            </Text>
            <Text
              color="grey"
              padding="0 10%"
            >
              {constants.telephoneNumber}
            </Text>
          </GridRow>
        </GridColumn>
      </GridRow>
    </>
  );
};

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
