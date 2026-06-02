import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotValueDispatch$HostNull extends PolyglotValueDispatch {
    constructor(polyglot: PolyglotImpl)
    // private polyglot: PolyglotImpl;
    asClass<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, targetType: Class<T>): T;
    asTypeLiteral<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, rawType: Class<T>, type: Type): T;
    isNull(languageContext: Object, receiver: Object): boolean;
}