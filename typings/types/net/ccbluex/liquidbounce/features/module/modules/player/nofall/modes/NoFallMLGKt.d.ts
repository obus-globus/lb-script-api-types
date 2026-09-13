import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MlgPlacementActionType } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/MlgPlacementActionType.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class NoFallMLGKt extends Object {
    /**
     * {@link FallingPlayer.findCollision} reports zero when the next movement tick lands.
     * Reserve one tick for interaction, plus one for sneak input when it has not reached the player yet.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L412 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:412}
     */
    static shouldPrepareMlgAction(collisionTick: number | null, rotationTicks: number, requiresSneak: boolean, isSneaking: boolean): boolean;
    static wasMlgPlacementApplied(type: MlgPlacementActionType, item: Item, before: BlockState | null, after: BlockState | null): boolean;
}