import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { ListOperation$Type } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$Type.d.ts'
export class ListOperation$Insert extends Record implements ListOperation {
    static MAP_CODEC: MapCodec<ListOperation$Insert>;
    static UNLIMITED_CODEC: MapCodec<ListOperation>;
    static codec(parammaxSize: number): MapCodec<ListOperation>;
    // private offset: number;
    apply(original: T[], replacement: T[], maxSize: number): T[];
    apply(original: T[], replacement: T[]): T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    mode(): ListOperation$Type;
    offset(): number;
    toString(): string;
}