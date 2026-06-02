import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface Shearable extends Object{
    readyForShearing(): boolean;
    shear(level: ServerLevel, soundSource: SoundSource, tool: ItemStack): void;
}