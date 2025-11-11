import { newSpecPage } from '@stencil/core/testing';
import { WcComponente03 } from '../wc-componente03';

describe('wc-componente03', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponente03],
      html: `<wc-componente03></wc-componente03>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-componente03>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-componente03>
    `);
  });
});
