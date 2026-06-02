import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Randoms extends Object {
    static secureRandom(): SecureRandom;
    private constructor()
}