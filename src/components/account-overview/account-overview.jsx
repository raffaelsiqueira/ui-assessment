import React from 'react';
import { string, number, shape } from 'prop-types';
import {
  PageBackground, GridRow, GridColumn, PageTitle,
} from '../../styles/styles';
import SupportContactComponent from '../support-contact-component/support-contact-component';
import { constants } from '../../assets/constants';
import SalesInfoComponent from '../sales-info-component/sales-info-component';

export function AccountOverview({ data }) {
  const {
    supportContact,
    salesOverview,
  } = data;

  return (
    <PageBackground>
      <GridRow>
        <GridColumn size="1">
          <PageTitle>{constants.pageTitle}</PageTitle>
        </GridColumn>
        <GridColumn size="1">
          <SupportContactComponent data={supportContact} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <SalesInfoComponent data={salesOverview} />
      </GridRow>
    </PageBackground>
  );
}

AccountOverview.propTypes = {
  data: shape({
    supportContact: shape({
      name: string,
      email: string,
    }),
    salesOverview: shape({
      uploads: number,
      successfulUploads: number,
      linesAttempted: number,
      linesSaved: number,
    }),
  }),

};

AccountOverview.defaultProps = {
  data: {
    supportContact: {
      name: '',
      email: '',
    },
    salesOverview: {
      uploads: 0,
      successfulUploads: 0,
      linesAttempted: 0,
      linesSaved: 0,
    },
  },
};

export default AccountOverview;
