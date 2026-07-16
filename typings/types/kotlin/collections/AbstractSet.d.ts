import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractSet$Companion } from '../../kotlin/collections/AbstractSet$Companion.d.ts'
export class AbstractSet<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: AbstractSet$Companion;
}