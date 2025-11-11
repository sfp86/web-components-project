import { newSpecPage } from '@stencil/core/testing';
import { Page01 } from '../page-01';

describe('page-01', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Page01],
      html: `<page-01></page-01>`,
    });
    expect(page.root).toEqualHtml(`
      <page-01>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-01>
    `);
  });
});
