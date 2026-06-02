import type { PolyglotBindings } from '../../../../com/oracle/truffle/polyglot/PolyglotBindings.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotBindingsValue extends PolyglotValueDispatch {
    constructor(context: PolyglotLanguageContext, bindings: PolyglotBindings)
    // private bindings: PolyglotBindings;
    // private languageContext: PolyglotLanguageContext;
    // private values: { [key: string]: Object };
    asClass<T extends Object | number | string | boolean>(context: Object, receiver: Object, targetType: Class<T>): T;
    asTypeLiteral<T extends Object | number | string | boolean>(context: Object, receiver: Object, rawType: Class<T>, type: Type): T;
    getMember(context: Object, receiver: Object, key: string): Object;
    getMemberKeys(context: Object, receiver: Object): string[];
    getMetaObjectImpl(context: PolyglotLanguageContext, receiver: Object): Object;
    hasMember(context: Object, receiver: Object, key: string): boolean;
    hasMembers(context: Object, receiver: Object): boolean;
    putMember(context: Object, receiver: Object, key: string, member: Object): void;
    removeMember(context: Object, receiver: Object, key: string): boolean;
    toStringImpl(context: PolyglotLanguageContext, receiver: Object): string;
}