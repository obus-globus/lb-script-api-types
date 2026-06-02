import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
export interface ClientLifecycleEvents$ClientStopping extends Object{
    onClientStopping(arg0: Minecraft): void;
}