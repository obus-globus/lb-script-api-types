import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
export class PolyglotFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements PolyglotWrapper, Function<T, R> {
    static asInstance(paramv: Object): PolyglotWrapper;
    static create(paramlanguageContext: PolyglotLanguageContext, paramfunction: Object, paramreturnClass: Class<Object>, paramreturnType: Type, paramparamClass: Class<Object>, paramparamType: Type): PolyglotFunction<Object, Object>;
    static equals(paramcontext: Object, paramreceiver: Object, paramobj: Object): boolean;
    static equalsProxy(paramwrapper: PolyglotWrapper, paramother: Object): boolean;
    static getHostProxy(paramv: Object): PolyglotWrapper;
    static hashCode(paramcontext: Object, paramreceiver: Object): number;
    static identity(): (param0: Object | null) => Object | null;
    static isHostProxy(paramv: Object): boolean;
    static isInstance(paramv: Object): boolean;
    static toString(paramthisObj: PolyglotWrapper): string;
    static toString(paramlanguageContext: Object, paramreceiver: Object): string;
    static toStringImpl(paramlanguageContext: Object, paramreceiver: Object): string;
    constructor(languageContext: PolyglotLanguageContext, function_: Object, returnClass: Class<Object>, returnType: Type, paramClass: Class<Object>, paramType: Type)
    // private apply: CallTarget;
    // private contextAnchor: Context;
    readonly guestObject: Object;
    readonly languageContext: PolyglotLanguageContext;
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(t: T): R;
    compose(arg0: (param0: V) => T): (param0: V) => R;
    equals(o: Object | null): boolean;
    getContext(): PolyglotContextImpl;
    getGuestObject(): Object;
    getLanguageContext(): PolyglotLanguageContext;
    hashCode(): number;
    toString(): string;
}