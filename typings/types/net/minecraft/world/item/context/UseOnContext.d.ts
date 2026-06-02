import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class UseOnContext extends Object {
    constructor(player: Player, hand: InteractionHand, hitResult: BlockHitResult)
    constructor(level: Level, player: Player, hand: InteractionHand, itemStack: ItemStack, hitResult: BlockHitResult)
    readonly hand: InteractionHand;
    // private hitResult: BlockHitResult;
    // private itemStack: ItemStack;
    readonly level: Level;
    readonly player: Player;
    getClickLocation(): Vec3;
    getClickedFace(): Direction;
    getClickedPos(): BlockPos;
    getHand(): InteractionHand;
    getHitResult(): BlockHitResult;
    getHorizontalDirection(): Direction;
    getItemInHand(): ItemStack;
    getLevel(): Level;
    getPlayer(): Player;
    getRotation(): number;
    isInside(): boolean;
    isSecondaryUseActive(): boolean;
}