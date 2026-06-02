import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class JwtX509StringConverter extends Object implements Converter<X509Certificate, CharSequence> {
    static INSTANCE: JwtX509StringConverter;
    constructor()
    applyFrom(arg0: CharSequence): X509Certificate;
    applyTo(arg0: X509Certificate): string;
    toCert(arg0: number[]): X509Certificate;
}