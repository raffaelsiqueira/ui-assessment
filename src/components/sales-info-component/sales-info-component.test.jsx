import { render } from '@testing-library/react';
import { mockData } from '../../assets/testMockData';
import SalesInfoComponent, { calculatePercentage } from './sales-info-component';

describe('Given SalesInfoComponent', () => {
  describe.each(
    [mockData.salesOverview],
  )('And data is correct', (mock) => {
    let successfulUploadsPercentage;
    let linesSavedPercentage;
    beforeAll(() => {
      successfulUploadsPercentage = calculatePercentage(mock.successfulUploads, mock.uploads);
      linesSavedPercentage = calculatePercentage(mock.linesSaved, mock.linesAttempted);
    });

    test('Then the percentages are calculated', () => {
      render(<SalesInfoComponent data={mock} />);
      expect(successfulUploadsPercentage).toBe(mock.uploadsPercentage);
      expect(linesSavedPercentage).toBe(mock.linesSavedPercentage);
    });
  });
});
