import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractMap$Companion } from '../../kotlin/collections/AbstractMap$Companion.d.ts'
export class AbstractMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: AbstractMap$Companion;
}