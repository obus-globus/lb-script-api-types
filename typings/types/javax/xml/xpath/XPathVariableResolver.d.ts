import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XPathVariableResolver extends Object{
    resolveVariable(arg0: QName): Object;
}