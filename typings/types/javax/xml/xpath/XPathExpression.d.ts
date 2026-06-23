import type { Class } from '../../../java/lang/Class.d.ts'
import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { XPathEvaluationResult } from '../../../javax/xml/xpath/XPathEvaluationResult.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
export interface XPathExpression extends Object{
    evaluate(arg0: Object): string;
    evaluate(arg0: Object, arg1: QName): Object;
    evaluate(arg0: InputSource): string;
    evaluate(arg0: InputSource, arg1: QName): Object;
    evaluateExpression(arg0: Object): XPathEvaluationResult<Object>;
    evaluateExpression<T extends unknown>(arg0: Object, arg1: Class<T>): T;
    evaluateExpression(arg0: InputSource): XPathEvaluationResult<Object>;
    evaluateExpression<T extends unknown>(arg0: InputSource, arg1: Class<T>): T;
}