import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { SecureRandom } from '../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecurityBuilder<T extends Object | number | string | boolean, B extends SecurityBuilder<T, B>> extends Builder<T>, Object{
    provider(arg0: Provider): B;
    random(arg0: SecureRandom): B;
}