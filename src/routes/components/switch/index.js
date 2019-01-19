import { Switch, Divider } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/switch/README.md';
  dependencies = { Switch, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/switch/README.md');
    return md.default || md;
  }
}
