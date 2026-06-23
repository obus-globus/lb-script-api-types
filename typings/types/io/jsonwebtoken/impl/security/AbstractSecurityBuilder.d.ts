import type { SecurityBuilder } from '../../../../io/jsonwebtoken/security/SecurityBuilder.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSecurityBuilder<T extends Object | number | string | boolean, B extends SecurityBuilder<T, B>> extends Object implements SecurityBuilder<T, B> {
    constructor()
    // private provider: { [key: string]: any };
    // private random: SecureRandom;
    provider(arg0: { [key: string]: any }): B;
    random(arg0: SecureRandom): B;
    self(): B;
}