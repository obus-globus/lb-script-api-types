import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotValueDispatch$PrimitiveValue extends PolyglotValueDispatch {
    private constructor(impl: PolyglotImpl, instance: PolyglotLanguageInstance, primitiveValue: Object)
    // private interop: InteropLibrary;
    // private language: PolyglotLanguage;
    asBigInteger(languageContext: Object, receiver: Object): BigInteger;
    asBoolean(languageContext: Object, receiver: Object): boolean;
    asByte(languageContext: Object, receiver: Object): number;
    asClass<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, targetType: Class<T>): T;
    asDouble(languageContext: Object, receiver: Object): number;
    asFloat(languageContext: Object, receiver: Object): number;
    asInt(languageContext: Object, receiver: Object): number;
    asLong(languageContext: Object, receiver: Object): number;
    asShort(languageContext: Object, receiver: Object): number;
    asString(languageContext: Object, receiver: Object): string;
    asStringBytes(languageContext: Object, receiver: Object, encoding: number): number[];
    asTypeLiteral<T extends Object | number | string | boolean>(languageContext: Object, receiver: Object, rawType: Class<T>, type: Type): T;
    fitsInBigInteger(languageContext: Object, receiver: Object): boolean;
    fitsInByte(languageContext: Object, receiver: Object): boolean;
    fitsInDouble(languageContext: Object, receiver: Object): boolean;
    fitsInFloat(languageContext: Object, receiver: Object): boolean;
    fitsInInt(languageContext: Object, receiver: Object): boolean;
    fitsInLong(languageContext: Object, receiver: Object): boolean;
    fitsInShort(languageContext: Object, receiver: Object): boolean;
    // private getLanguageView(languageContext: Object, receiver: Object): Object;
    getMetaObjectImpl(languageContext: PolyglotLanguageContext, receiver: Object): Object;
    isBoolean(languageContext: Object, receiver: Object): boolean;
    isNumber(languageContext: Object, receiver: Object): boolean;
    isString(languageContext: Object, receiver: Object): boolean;
    toStringImpl(context: PolyglotLanguageContext, receiver: Object): string;
}