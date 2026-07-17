import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DatapackStructureReport$CustomPackEntry } from '../../../../net/minecraft/data/info/DatapackStructureReport$CustomPackEntry.d.ts'
import type { DatapackStructureReport$Entry } from '../../../../net/minecraft/data/info/DatapackStructureReport$Entry.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DatapackStructureReport$Report extends Record {
    static CODEC: Codec<DatapackStructureReport$Report>;
    private constructor(registries: JavaMap<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>, others: JavaMap<string, DatapackStructureReport$CustomPackEntry>)
    // private others: JavaMap<string, DatapackStructureReport$CustomPackEntry>;
    // private registries: JavaMap<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    others(): JavaMap<string, DatapackStructureReport$CustomPackEntry>;
    registries(): JavaMap<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>;
    toString(): string;
}