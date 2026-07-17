import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static CODEC: Codec<TypedDataComponent<Object>[]>;
    static EMPTY: TypedDataComponent<Object>[];
    static builder(): DataComponentMap$Builder;
    static composite(paramprototype: TypedDataComponent<Object>[], paramoverrides: TypedDataComponent<Object>[]): TypedDataComponent<Object>[];
    static makeCodec(paramcomponentTypeCodec: Codec<DataComponentType<Object>>): Codec<TypedDataComponent<Object>[]>;
    static makeCodecFromMap(parammapCodec: Codec<JavaMap<DataComponentType<Object>, Object>>): Codec<TypedDataComponent<Object>[]>;
}