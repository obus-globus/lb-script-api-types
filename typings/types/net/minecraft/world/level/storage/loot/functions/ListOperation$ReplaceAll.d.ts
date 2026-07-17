import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
import type { ListOperation$Type } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$Type.d.ts'
export class ListOperation$ReplaceAll extends Object implements ListOperation {
    static INSTANCE: ListOperation$ReplaceAll;
    static MAP_CODEC: MapCodec<ListOperation$ReplaceAll>;
    static UNLIMITED_CODEC: MapCodec<ListOperation>;
    private constructor()
    apply<T extends unknown>(original: T[], replacement: T[]): T[];
    apply<T extends unknown>(original: T[], replacement: T[], maxSize: number): T[];
    mode(): ListOperation$Type;
}