import { newSpecPage } from '@stencil/core/testing';
import { WcEventos } from '../wc-eventos';

describe('wc-eventos', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcEventos],
      html: `<wc-eventos></wc-eventos>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-eventos>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-eventos>
    `);
  });
});
