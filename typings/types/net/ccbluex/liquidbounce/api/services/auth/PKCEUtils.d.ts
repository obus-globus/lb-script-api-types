import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
export class PKCEUtils extends Object {
    static INSTANCE: PKCEUtils;
    generatePKCE(): Pair<string, string>;
}