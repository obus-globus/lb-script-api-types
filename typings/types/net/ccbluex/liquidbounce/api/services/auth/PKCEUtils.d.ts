import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PKCEUtils$PKCEPair } from '../../../../../../net/ccbluex/liquidbounce/api/services/auth/PKCEUtils$PKCEPair.d.ts'
export class PKCEUtils extends Object {
    static INSTANCE: PKCEUtils;
    generatePKCE(): PKCEUtils$PKCEPair;
}