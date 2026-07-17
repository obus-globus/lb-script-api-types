import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataComponentPatch } from '../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { HashedPatchMap$HashGenerator } from '../../../net/minecraft/network/HashedPatchMap$HashGenerator.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class HashedPatchMap extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, HashedPatchMap>;
    static create(parampatch: DataComponentPatch, paramhasher: (param0: TypedDataComponent<Object>) => number): HashedPatchMap;
    constructor(addedComponents: JavaMap<DataComponentType<Object>, number>, removedComponents: DataComponentType<Object>[])
    // private addedComponents: JavaMap<DataComponentType<Object>, number>;
    // private removedComponents: DataComponentType<Object>[];
    addedComponents(): JavaMap<DataComponentType<Object>, number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(patch: DataComponentPatch, hasher: (param0: TypedDataComponent<Object>) => number): boolean;
    removedComponents(): DataComponentType<Object>[];
    toString(): string;
}