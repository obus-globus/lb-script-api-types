import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotObjectProxyHandler$ObjectProxyNode } from '../../../../com/oracle/truffle/polyglot/PolyglotObjectProxyHandler$ObjectProxyNode.d.ts'
import type { PolyglotObjectProxyHandler$ProxyInvokeNode } from '../../../../com/oracle/truffle/polyglot/PolyglotObjectProxyHandler$ProxyInvokeNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotObjectProxyHandlerFactory$ObjectProxyNodeGen extends PolyglotObjectProxyHandler$ObjectProxyNode {
    static create(paramlanguageInstance: PolyglotLanguageInstance, paramreceiverType: Class<Object>, paraminterfaceType: Class<Object>, paramgenericType: Type): PolyglotObjectProxyHandler$ObjectProxyNode;
    static createConstantNode(paramconstant: Object): RootNode;
    private constructor(languageInstance: PolyglotLanguageInstance, receiverType: Class<Object>, interfaceType: Class<Object>, genericType: Type)
    // private proxyInvoke_: PolyglotObjectProxyHandler$ProxyInvokeNode;
    // private state_0_: number;
    // private toGuests__field1_: Node;
    // private toGuests__field2_: Object;
    // private executeAndSpecialize(arg0Value: PolyglotLanguageContext, arg1Value: Object, arg2Value: Object[]): Object;
    executeImpl(arg0Value: PolyglotLanguageContext, arg1Value: Object, arg2Value: Object[]): Object;
}