import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerLifecycleEvents$AfterSave extends Object{
    onAfterSave(arg0: MinecraftServer, arg1: boolean, arg2: boolean): void;
}