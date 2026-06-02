import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { RSAOtherPrimeInfo } from '../../../../java/security/spec/RSAOtherPrimeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RSAOtherPrimeInfoConverter extends Object implements Converter<RSAOtherPrimeInfo, Object> {
    constructor()
    applyFrom(arg0: Object): RSAOtherPrimeInfo;
    applyTo(arg0: RSAOtherPrimeInfo): Object;
}