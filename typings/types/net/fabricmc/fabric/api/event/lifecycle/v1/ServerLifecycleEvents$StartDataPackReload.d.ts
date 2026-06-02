import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { CloseableResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export interface ServerLifecycleEvents$StartDataPackReload extends Object{
    startDataPackReload(arg0: MinecraftServer, arg1: CloseableResourceManager): void;
}