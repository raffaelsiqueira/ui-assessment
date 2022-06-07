import { render, screen } from '@testing-library/react';
import SupportContactComponent from './support-contact-component';
import { mockData } from '../../assets/testMockData';

test('renders support contact component', () => {
  render(<SupportContactComponent data={mockData.supportContact} />);

  const supportContactTitle = screen.getByText('YOUR FEEFO SUPPORT CONTACT');
  const telephoneNumber = screen.getByText('020 3362 4208');
  const name = screen.getByText('John Smith');
  const email = screen.getByText('john.smith@feefo.com');

  expect(supportContactTitle).toBeInTheDocument();
  expect(telephoneNumber).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
