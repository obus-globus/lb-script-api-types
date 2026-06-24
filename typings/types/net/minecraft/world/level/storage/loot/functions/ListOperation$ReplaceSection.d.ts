import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { ListOperation$Type } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$Type.d.ts'
export class ListOperation$ReplaceSection extends Record implements ListOperation {
    static MAP_CODEC: MapCodec<ListOperation$ReplaceSection>;
    static UNLIMITED_CODEC: MapCodec<ListOperation>;
    static codec(parammaxSize: number): MapCodec<ListOperation>;
    constructor(offset: number)
    constructor(offset: number, size: Optional<number>)
    // private offset: number;
    // private size: Optional<number>;
    apply<T extends unknown>(original: T[], replacement: T[]): T[];
    apply<T extends unknown>(original: T[], replacement: T[], maxSize: number): T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    mode(): ListOperation$Type;
    offset(): number;
    size(): Optional<number>;
    toString(): string;
}