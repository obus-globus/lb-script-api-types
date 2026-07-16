import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SmartSet$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/SmartSet$Companion.d.ts'
export class SmartSet<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: SmartSet$Companion;
    static create<T extends unknown>(): T[];
}