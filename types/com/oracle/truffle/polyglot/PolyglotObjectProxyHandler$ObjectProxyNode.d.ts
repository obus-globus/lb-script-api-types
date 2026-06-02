import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HostToGuestRootNode } from '../../../../com/oracle/truffle/polyglot/HostToGuestRootNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageContext$ToGuestValuesNode } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext$ToGuestValuesNode.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotObjectProxyHandler$ProxyInvokeNode } from '../../../../com/oracle/truffle/polyglot/PolyglotObjectProxyHandler$ProxyInvokeNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotObjectProxyHandler$ObjectProxyNode extends HostToGuestRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(languageInstance: PolyglotLanguageInstance, receiverType: Class<Object>, interfaceType: Class<Object>, genericType: Type)
    // private genericType: Type;
    // private interfaceType: Class<Object>;
    // private receiverClass: Class<Object>;
    doDefault(languageContext: PolyglotLanguageContext, receiver: Object, args: Object[], node: Node, proxyInvoke: PolyglotObjectProxyHandler$ProxyInvokeNode, toGuests: PolyglotLanguageContext$ToGuestValuesNode): Object;
    equals(obj: Object | null): boolean;
    getName(): string;
    getReceiverType(): Class<TruffleObject>;
    hashCode(): number;
}