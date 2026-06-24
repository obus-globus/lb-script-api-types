import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { CauldronInteraction$Dispatcher } from '../../../../net/minecraft/core/cauldron/CauldronInteraction$Dispatcher.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CauldronInteractions extends Object {
    static CODEC: Codec<CauldronInteraction$Dispatcher>;
    static EMPTY: CauldronInteraction$Dispatcher;
    static LAVA: CauldronInteraction$Dispatcher;
    static POWDER_SNOW: CauldronInteraction$Dispatcher;
    static WATER: CauldronInteraction$Dispatcher;
    static addDefaultInteractions(paraminteractionMap: CauldronInteraction$Dispatcher): void;
    static bootStrap(): void;
    static emptyBucket(paramlevel: Level, parampos: BlockPos, paramplayer: Player, paramhand: InteractionHand, paramitemInHand: ItemStack, paramnewState: BlockState, paramsoundEvent: SoundEvent): InteractionResult;
    static fillBucket(paramstate: BlockState, paramlevel: Level, parampos: BlockPos, paramplayer: Player, paramhand: InteractionHand, paramitemInHand: ItemStack, paramnewItem: ItemStack, paramcanFill: (param0: BlockState) => boolean, paramsoundEvent: SoundEvent): InteractionResult;
    constructor()
}