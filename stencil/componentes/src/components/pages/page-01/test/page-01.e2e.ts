import { newE2EPage } from '@stencil/core/testing';

describe('page-01', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-01></page-01>');

    const element = await page.find('page-01');
    expect(element).toHaveClass('hydrated');
  });
});
