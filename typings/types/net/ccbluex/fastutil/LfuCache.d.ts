import type { Object } from '../../../java/lang/Object.d.ts'
import type { LfuCache$Companion } from '../../../net/ccbluex/fastutil/LfuCache$Companion.d.ts'
export class LfuCache<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: LfuCache$Companion;
}