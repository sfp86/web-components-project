import { newE2EPage } from '@stencil/core/testing';

describe('wc-componente03', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-componente03></wc-componente03>');

    const element = await page.find('wc-componente03');
    expect(element).toHaveClass('hydrated');
  });
});
