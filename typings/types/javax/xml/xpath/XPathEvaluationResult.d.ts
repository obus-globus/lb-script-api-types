import type { XPathEvaluationResult$XPathResultType } from '../../../javax/xml/xpath/XPathEvaluationResult$XPathResultType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XPathEvaluationResult<T extends unknown> extends Object{
    type(): XPathEvaluationResult$XPathResultType;
    value(): T;
}