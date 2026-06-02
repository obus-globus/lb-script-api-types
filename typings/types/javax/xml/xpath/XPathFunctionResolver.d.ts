import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { XPathFunction } from '../../../javax/xml/xpath/XPathFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XPathFunctionResolver extends Object{
    resolveFunction(arg0: QName, arg1: number): XPathFunction;
}