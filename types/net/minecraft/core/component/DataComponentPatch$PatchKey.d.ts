import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
export class DataComponentPatch$PatchKey extends Record {
    static CODEC: Codec<DataComponentPatch$PatchKey>;
    // private removed: boolean;
    // private type: DataComponentType<Object>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    removed(): boolean;
    toString(): string;
    type(): DataComponentType<Object>;
    valueCodec(): Codec<Object>;
}