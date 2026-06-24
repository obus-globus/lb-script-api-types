import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DatapackStructureReport$Entry extends Record {
    static CODEC: Codec<DatapackStructureReport$Entry>;
    static MAP_CODEC: MapCodec<DatapackStructureReport$Entry>;
    private constructor(elements: boolean, tags: boolean, stable: boolean)
    // private elements: boolean;
    // private stable: boolean;
    // private tags: boolean;
    elements(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    stable(): boolean;
    tags(): boolean;
    toString(): string;
}