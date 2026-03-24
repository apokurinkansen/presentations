import container from 'markdown-it-container';
import attrs from 'markdown-it-attrs';
import ins from 'markdown-it-ins';
import mark from 'markdown-it-mark'
import prism from 'markdown-it-prism';
import textualUml from 'markdown-it-textual-uml';

/** Inject --page / --total CSS custom properties for progress bar */
function progressBar(md) {
  md.core.ruler.push('progress_bar', (state) => {
    const slides = state.tokens.filter(t => t.type === 'marpit_slide_open');
    const total = slides.length;
    for (let i = 0; i < slides.length; i++) {
      slides[i].attrJoin('style', `--page:${i + 1};--total:${total}`);
    }
  });
}

/**
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(textualUml)
  .use(prism)
  .use(mark)
  .use(ins)
  .use(attrs)
  .use(progressBar)
  .use(container, '_')
  .use(container, 'c')
  .use(container, 'c3')
  .use(container, 'c-7-3')
  .use(container, 'c-3-7')
  .use(container, 'col')
  .use(container, 'grid')
  .use(container, 'grid-2x2');
