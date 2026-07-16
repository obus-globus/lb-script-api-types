import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
import type { BlockEntity } from '../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class Container {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_DISTANCE_BUFFER: number;
    static stillValidBlockEntity(paramblockEntity: BlockEntity, paramplayer: Player): boolean;
    static stillValidBlockEntity(paramblockEntity: BlockEntity, paramplayer: Player, paramdistanceBuffer: number): boolean;
}