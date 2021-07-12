// @index(['../../src/**/__demo__/*.vue'], (f, _) => `export { default as ${_.pascalCase('demo_'+f.path.replace(/(^.+?\/components\/|__demo__)/g, ''))} } from '${f.path}';`)
export { default as DemoButtonColor } from '../../src/components/button/__demo__/color';
export { default as DemoButtonDisabled } from '../../src/components/button/__demo__/disabled';
export { default as DemoButtonPrimary } from '../../src/components/button/__demo__/primary';
export { default as DemoButtonSecondary } from '../../src/components/button/__demo__/secondary';
export { default as DemoButtonSize } from '../../src/components/button/__demo__/size';
export { default as DemoIconBasic } from '../../src/components/icon/__demo__/basic';
export { default as DemoNotifyBasic } from '../../src/components/notify/__demo__/basic';
export { default as DemoNotifyCustomize } from '../../src/components/notify/__demo__/customize';
export { default as DemoNotifyIconCustomize } from '../../src/components/notify/__demo__/icon';
export { default as DemoNotifyTypeUsage } from '../../src/components/notify/__demo__/type';
export { default as DemoPopupBasic } from '../../src/components/popup/__demo__/basic';
export { default as DemoPopupCustomTransition } from '../../src/components/popup/__demo__/custom_transition';
export { default as DemoPopupDrawer } from '../../src/components/popup/__demo__/drawer';
export { default as DemoPopupNoMask } from '../../src/components/popup/__demo__/no_mask';
export { default as DemoPopupTransparentMask } from '../../src/components/popup/__demo__/transparent_mask';
// @endindex

// @index(['../**/*.vue', '!**/.*/**'], (f, _) => `export { default as ${_.pascalCase('demo_docs_'+f.path)} } from '${f.path}';`)
export { default as DemoDocsGuideTool } from '../guide/tool';
export { default as DemoDocsGuideUsage } from '../guide/usage';
// @endindex
