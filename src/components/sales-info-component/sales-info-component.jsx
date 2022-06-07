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

  const calculatePercentage = (partial, total) => {
    if (isNaN(partial) || isNaN(total)) return 'Inconclusive value';
    if (partial === 0 || total === 0) return 0;
    return (partial / total) * 100;
  };

  return (
    <SalesInfoBox>
      <GridRow borderBottom="#EAEAEA solid 0.1rem">
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
                {` ${salesOverview.uploads} ${constants.uploads} `}
              </Text>
              <Text
                color="grey"
              >
                {constants.and}
                <Text
                  color="grey"
                  bold
                >
                  {` ${salesOverview.linesAttempted} `}
                </Text>
                <Text
                  color="grey"
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
      <GridRow padding="0%">
        <GridColumn size="1" borderRight="#EAEAEA solid 0.1rem" padding="1%">
          { isNaN(calculatePercentage(salesOverview.successfulUploads, salesOverview.uploads))
            ? (
              <Text
                bold
                padding="0 1%"
                size="2rem"
                color="red"
              >
                {` ${calculatePercentage(salesOverview.successfulUploads, salesOverview.uploads)} ${constants.ofUploads} `}
              </Text>
            )
            : (
              <>
                <Text
                  bold
                  flex
                  padding="0 1%"
                  size="3rem"
                  color="green"
                >
                  {` ${calculatePercentage(salesOverview.successfulUploads, salesOverview.uploads)}% `}
                </Text>
                <Text
                  color="grey"
                  flex
                  padding="0 1.3%"
                  bold
                >
                  {constants.uploadSucess}
                </Text>
              </>
            )}
        </GridColumn>
        <GridColumn size="1" padding="1%">
          { isNaN(calculatePercentage(salesOverview.linesSaved, salesOverview.linesAttempted))
            ? (
              <Text
                bold
                padding="0 1%"
                size="2rem"
                color="red"
              >
                {` ${calculatePercentage(salesOverview.linesSaved, salesOverview.linesAttempted)} ${constants.ofUploads} `}
              </Text>
            )
            : (
              <>
                <Text
                  bold
                  flex
                  padding="0 1%"
                  size="3rem"
                  color="green"
                >
                  {` ${calculatePercentage(salesOverview.linesSaved, salesOverview.linesAttempted)}% `}
                </Text>
                <Text
                  color="grey"
                  flex
                  padding="0 1.3%"
                  bold
                >
                  {constants.linesSaved}
                </Text>
              </>
            )}
        </GridColumn>
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
