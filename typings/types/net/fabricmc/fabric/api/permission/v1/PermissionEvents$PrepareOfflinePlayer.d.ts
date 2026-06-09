import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutablePermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/MutablePermissionContext.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface PermissionEvents$PrepareOfflinePlayer extends Object {
    prepareOfflinePlayer(arg0: PermissionContext, arg1: MinecraftServer): CompletableFuture<(param0: MutablePermissionContext) => void>;
}