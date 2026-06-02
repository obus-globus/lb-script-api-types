import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HostToGuestRootNode } from '../../../../com/oracle/truffle/polyglot/HostToGuestRootNode.d.ts'
import type { PolyglotExecuteNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecuteNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotFunction$Apply extends HostToGuestRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: PolyglotLanguageInstance, receiverType: Class<Object>, returnClass: Class<Object>, returnType: Type, paramClass: Class<Object>, paramType: Type)
    // private apply: PolyglotExecuteNode;
    // private paramClass: Class<Object>;
    // private paramType: Type;
    // private receiverClass: Class<Object>;
    // private returnClass: Class<Object>;
    // private returnType: Type;
    equals(obj: Object | null): boolean;
    executeImpl(languageContext: PolyglotLanguageContext, function_: Object, args: Object[]): Object;
    getName(): string;
    getReceiverType(): Class<TruffleObject>;
    hashCode(): number;
}