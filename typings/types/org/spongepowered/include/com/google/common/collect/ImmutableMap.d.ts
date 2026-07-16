import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableMap$Builder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableMap$Builder.d.ts'
export class ImmutableMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<K extends unknown, V extends unknown>(): ImmutableMap$Builder<K, V>;
    static of<K extends unknown, V extends unknown>(): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Map<K, V>;
}