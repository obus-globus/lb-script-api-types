import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableMap$Builder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableMap$Builder.d.ts'
export class ImmutableBiMapFauxverideShim<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<K extends unknown, V extends unknown>(): ImmutableMap$Builder<K, V>;
    static of<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): JavaMap<K, V>;
}