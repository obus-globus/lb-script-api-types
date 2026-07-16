import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractList$Companion } from '../../kotlin/collections/AbstractList$Companion.d.ts'
export class ReversedListReadOnly<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: AbstractList$Companion;
}