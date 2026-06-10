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
    static compound(paramarg0: Converter<Object, Object>, paramarg1: Converter<Object, Object>): Converter<Object, Object>;
    static forEncoded(paramarg0: Class<Object>, paramarg1: Converter<Object, CharSequence>): Converter<Object, Object>;
    static forList(paramarg0: Converter<Object, Object>): Converter<(Object | null)[], Object>;
    static forSet(paramarg0: Converter<Object, Object>): Converter<(Object | null)[], Object>;
    static forType(paramarg0: Class<Object>): Converter<Object, Object>;
    private constructor()
}