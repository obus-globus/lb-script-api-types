import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { CloseableResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export interface ServerLifecycleEvents$EndDataPackReload extends Object{
    endDataPackReload(arg0: MinecraftServer, arg1: CloseableResourceManager, arg2: boolean): void;
}