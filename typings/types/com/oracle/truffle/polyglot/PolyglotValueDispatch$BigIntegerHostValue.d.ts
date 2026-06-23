import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotValueDispatch$HostValue } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch$HostValue.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotValueDispatch$BigIntegerHostValue extends PolyglotValueDispatch$HostValue {
    constructor(polyglot: PolyglotImpl)
    asBigInteger(languageContext: Object, receiver: Object): BigInteger;
    asByte(languageContext: Object, receiver: Object): number;
    asDouble(languageContext: Object, receiver: Object): number;
    asFloat(languageContext: Object, receiver: Object): number;
    asImpl<T extends unknown>(languageContext: Object, receiver: Object, targetType: Class<T>): T;
    asInt(languageContext: Object, receiver: Object): number;
    asLong(languageContext: Object, receiver: Object): number;
    asShort(languageContext: Object, receiver: Object): number;
    fitsInBigInteger(context: Object, receiver: Object): boolean;
    fitsInByte(context: Object, receiver: Object): boolean;
    fitsInDouble(context: Object, receiver: Object): boolean;
    fitsInFloat(context: Object, receiver: Object): boolean;
    fitsInInt(context: Object, receiver: Object): boolean;
    fitsInLong(context: Object, receiver: Object): boolean;
    fitsInShort(context: Object, receiver: Object): boolean;
    isNumber(context: Object, receiver: Object): boolean;
}