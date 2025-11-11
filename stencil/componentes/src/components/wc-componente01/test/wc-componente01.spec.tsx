import { newSpecPage } from '@stencil/core/testing';
import { WcComponente01 } from '../wc-componente01';

describe('wc-componente01', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponente01],
      html: `<wc-componente01></wc-componente01>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-componente01>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-componente01>
    `);
  });
});
