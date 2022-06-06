import React from 'react';
import { number, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import {
  SalesInfoBox, GridRow, GridColumn, Text, SalesIcon,
} from '../../styles/styles';
import { constants } from '../../assets/constants';

const SalesInfoComponent = ({ data }) => {
  const salesOverview = data;

  return (
    <SalesInfoBox>
      <GridRow>
        <GridColumn size="1">
          <GridRow>
            <div aria-hidden="true">
              <SalesIcon>
                <FontAwesomeIcon icon={faUpload} color="#3EB1EB" />
              </SalesIcon>
            </div>
            <Text
              bold
              padding="0 1%"
              size="1.5rem"
            >
              {constants.sales}
            </Text>
          </GridRow>
          <GridRow>
            <Text
              color="grey"
            >
              {constants.youHad}
              <Text
                color="grey"
                bold
              >
                {` ${salesOverview.uploads} uploads `}
              </Text>
              <Text
                color="grey"
              >
                {constants.and}
                <Text
                  color="grey"
                  bold
                >
                  {` ${salesOverview.linesSaved} `}
                </Text>
                <Text
                  color="grey"
                  bold
                >
                  {constants.linesAdded}
                </Text>
              </Text>
            </Text>
          </GridRow>
        </GridColumn>
        <GridColumn padding="1% 2%">
          <div aria-hidden="true">
            <SalesIcon>
              <FontAwesomeIcon icon={faInfoCircle} color="#BFBBBB" />
            </SalesIcon>
          </div>
        </GridColumn>
      </GridRow>
      <GridRow>
        Segunda linha
      </GridRow>
    </SalesInfoBox>
  );
};

SalesInfoComponent.propTypes = {
  data: shape({
    uploads: number,
    successfulUploads: number,
    linesAttempted: number,
    linesSaved: number,
  }),
};

SalesInfoComponent.defaultProps = {
  data: {
    uploads: 0,
    successfulUploads: 0,
    linesAttempted: 0,
    linesSaved: 0,
  },
};

export default SalesInfoComponent;
