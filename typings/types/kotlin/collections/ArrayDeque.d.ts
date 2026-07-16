import type { Object } from '../../java/lang/Object.d.ts'
import type { ArrayDeque$Companion } from '../../kotlin/collections/ArrayDeque$Companion.d.ts'
export class ArrayDeque<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: ArrayDeque$Companion;
}