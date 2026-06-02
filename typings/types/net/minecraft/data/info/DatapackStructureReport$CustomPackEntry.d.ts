import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DatapackStructureReport$Entry } from '../../../../net/minecraft/data/info/DatapackStructureReport$Entry.d.ts'
import type { DatapackStructureReport$Format } from '../../../../net/minecraft/data/info/DatapackStructureReport$Format.d.ts'
export class DatapackStructureReport$CustomPackEntry extends Record {
    static CODEC: Codec<DatapackStructureReport$CustomPackEntry>;
    private constructor(format: DatapackStructureReport$Format, entry: DatapackStructureReport$Entry)
    // private entry: DatapackStructureReport$Entry;
    // private format: DatapackStructureReport$Format;
    entry(): DatapackStructureReport$Entry;
    equals(o: Object | null): boolean;
    format(): DatapackStructureReport$Format;
    hashCode(): number;
    toString(): string;
}