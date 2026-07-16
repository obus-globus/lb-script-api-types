import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Converters extends Object {
    static BASE64URL_BYTES: Converter<number[], Object>;
    static BIGINT: Converter<BigInteger, Object>;
    static BIGINT_UBYTES: Converter<BigInteger, number[]>;
    static URI: Converter<URI, Object>;
    static X509_CERTIFICATE: Converter<X509Certificate, Object>;
    static compound<A extends unknown, B extends unknown, C extends unknown>(paramarg0: Converter<A, B>, paramarg1: Converter<B, C>): Converter<A, C>;
    static forEncoded<T extends unknown>(paramarg0: Class<T>, paramarg1: Converter<T, CharSequence>): Converter<T, Object>;
    static forList<T extends unknown>(paramarg0: Converter<T, Object>): Converter<T[], Object>;
    static forSet<T extends unknown>(paramarg0: Converter<T, Object>): Converter<T[], Object>;
    static forType<T extends unknown>(paramarg0: Class<T>): Converter<T, Object>;
    private constructor()
}