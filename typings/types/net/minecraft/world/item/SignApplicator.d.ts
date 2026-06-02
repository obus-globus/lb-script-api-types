import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { SignBlockEntity } from '../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
export interface SignApplicator extends Object{
    canApplyToSign(text: SignText, item: ItemStack, player: Player): boolean;
    tryApplyToSign(level: Level, sign: SignBlockEntity, isFrontText: boolean, item: ItemStack, player: Player): boolean;
}