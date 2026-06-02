import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Allay } from '../../../../../../net/minecraft/world/entity/animal/allay/Allay.d.ts'
export class AllayAi extends Object {
    static getLikedPlayer(paramallay: LivingEntity): Optional<ServerPlayer>;
    static hearNoteblock(paramallay: LivingEntity, parampos: BlockPos): void;
    static updateActivity(parambody: Allay): void;
    constructor()
}