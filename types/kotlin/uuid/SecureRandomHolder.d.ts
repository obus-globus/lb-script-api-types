import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SecureRandomHolder extends Object {
    static INSTANCE: SecureRandomHolder;
    readonly instance: SecureRandom;
}