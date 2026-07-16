import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArrayMapImpl$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/ArrayMapImpl$Companion.d.ts'
export class ArrayMapImpl<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: ArrayMapImpl$Companion;
}