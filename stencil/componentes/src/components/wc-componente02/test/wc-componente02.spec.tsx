import { newSpecPage } from '@stencil/core/testing';
import { WcComponente02 } from '../wc-componente02';

describe('wc-componente02', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponente02],
      html: `<wc-componente02></wc-componente02>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-componente02>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-componente02>
    `);
  });
});
