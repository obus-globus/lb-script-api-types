import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
export interface ClientLifecycleEvents$ClientStarted extends Object{
    onClientStarted(arg0: Minecraft): void;
}