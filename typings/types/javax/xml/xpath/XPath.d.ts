import type { Class } from '../../../java/lang/Class.d.ts'
import type { NamespaceContext } from '../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { XPathEvaluationResult } from '../../../javax/xml/xpath/XPathEvaluationResult.d.ts'
import type { XPathExpression } from '../../../javax/xml/xpath/XPathExpression.d.ts'
import type { XPathFunctionResolver } from '../../../javax/xml/xpath/XPathFunctionResolver.d.ts'
import type { XPathVariableResolver } from '../../../javax/xml/xpath/XPathVariableResolver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
export interface XPath extends Object{
    compile(arg0: string): XPathExpression;
    evaluate(arg0: string, arg1: Object): string;
    evaluate(arg0: string, arg1: Object, arg2: QName): Object;
    evaluate(arg0: string, arg1: InputSource): string;
    evaluate(arg0: string, arg1: InputSource, arg2: QName): Object;
    evaluateExpression(arg0: string, arg1: Object): XPathEvaluationResult<Object>;
    evaluateExpression<T extends unknown>(arg0: string, arg1: Object, arg2: Class<T>): T;
    evaluateExpression(arg0: string, arg1: InputSource): XPathEvaluationResult<Object>;
    evaluateExpression<T extends unknown>(arg0: string, arg1: InputSource, arg2: Class<T>): T;
    getNamespaceContext(): NamespaceContext;
    getXPathFunctionResolver(): XPathFunctionResolver;
    getXPathVariableResolver(): XPathVariableResolver;
    reset(): void;
    setNamespaceContext(arg0: NamespaceContext): void;
    setXPathFunctionResolver(arg0: XPathFunctionResolver): void;
    setXPathVariableResolver(arg0: XPathVariableResolver): void;
}