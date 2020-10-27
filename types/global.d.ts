// Types for compiled templates
declare module 'qunit-dom-typescript-reproduction/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
