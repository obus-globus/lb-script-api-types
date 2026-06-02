import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerLifecycleEvents$BeforeSave extends Object{
    onBeforeSave(arg0: MinecraftServer, arg1: boolean, arg2: boolean): void;
}