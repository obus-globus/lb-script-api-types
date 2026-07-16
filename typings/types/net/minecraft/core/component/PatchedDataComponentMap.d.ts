import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentPatch } from '../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class PatchedDataComponentMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static CODEC: Codec<TypedDataComponent<Object>[]>;
    static EMPTY: TypedDataComponent<Object>[];
    static fromPatch(paramprototype: TypedDataComponent<Object>[], parampatch: DataComponentPatch): (Object | null)[];
}