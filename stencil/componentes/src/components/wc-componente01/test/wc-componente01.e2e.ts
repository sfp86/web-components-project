import { newE2EPage } from '@stencil/core/testing';

describe('wc-componente01', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-componente01></wc-componente01>');

    const element = await page.find('wc-componente01');
    expect(element).toHaveClass('hydrated');
  });
});
