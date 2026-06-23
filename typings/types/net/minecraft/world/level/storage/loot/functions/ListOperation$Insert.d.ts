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
    apply<T extends unknown>(original: T[], replacement: T[]): T[];
    apply<T extends unknown>(original: T[], replacement: T[], maxSize: number): T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    mode(): ListOperation$Type;
    offset(): number;
    toString(): string;
}