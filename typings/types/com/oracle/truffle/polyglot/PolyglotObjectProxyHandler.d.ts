import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InvocationHandler } from '../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
export class PolyglotObjectProxyHandler extends Object implements PolyglotWrapper, InvocationHandler {
    constructor(obj: Object, languageContext: PolyglotLanguageContext, interfaceClass: Class<Object>, genericType: Type)
    // private contextAnchor: Context;
    // private invoke: CallTarget;
    readonly languageContext: PolyglotLanguageContext;
    // private obj: Object;
    getContext(): PolyglotContextImpl;
    getGuestObject(): Object;
    getLanguageContext(): PolyglotLanguageContext;
    invoke(proxy: Object, method: Method, arguments: Object[]): Object;
}