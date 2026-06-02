import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { PolyglotExecuteNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecuteNode.d.ts'
import type { PolyglotFunctionProxyHandler$FunctionProxyNode } from '../../../../com/oracle/truffle/polyglot/PolyglotFunctionProxyHandler$FunctionProxyNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotFunctionProxyHandlerFactory$FunctionProxyNodeGen extends PolyglotFunctionProxyHandler$FunctionProxyNode {
    static create(paramlanguageInstance: PolyglotLanguageInstance, paramreceiverType: Class<Object>, parammethod: Method, paramgenericType: Type): PolyglotFunctionProxyHandler$FunctionProxyNode;
    static createConstantNode(paramconstant: Object): RootNode;
    private constructor(languageInstance: PolyglotLanguageInstance, receiverType: Class<Object>, method: Method, genericType: Type)
    // private executeNode_: PolyglotExecuteNode;
    // private returnClass_: Class<Object>;
    // private returnType_: Type;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: PolyglotLanguageContext, arg1Value: Object, arg2Value: Object[]): Object;
    executeImpl(arg0Value: PolyglotLanguageContext, arg1Value: Object, arg2Value: Object[]): Object;
}