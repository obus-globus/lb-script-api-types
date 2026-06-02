import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { LocalPlayer } from '../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export interface ClientPreAttackCallback extends Object{
    onClientPlayerPreAttack(arg0: Minecraft, arg1: LocalPlayer, arg2: number): boolean;
}