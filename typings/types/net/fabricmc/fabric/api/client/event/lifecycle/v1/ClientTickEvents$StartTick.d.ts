import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
export interface ClientTickEvents$StartTick extends Object{
    onStartTick(arg0: Minecraft): void;
}