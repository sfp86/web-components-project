import { newE2EPage } from '@stencil/core/testing';

describe('wc-eventos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-eventos></wc-eventos>');

    const element = await page.find('wc-eventos');
    expect(element).toHaveClass('hydrated');
  });
});
