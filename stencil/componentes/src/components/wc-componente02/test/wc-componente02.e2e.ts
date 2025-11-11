import { newE2EPage } from '@stencil/core/testing';

describe('wc-componente02', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-componente02></wc-componente02>');

    const element = await page.find('wc-componente02');
    expect(element).toHaveClass('hydrated');
  });
});
