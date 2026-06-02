import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
export interface ScreenAccessor extends Object{
    getClient(): Minecraft;
}