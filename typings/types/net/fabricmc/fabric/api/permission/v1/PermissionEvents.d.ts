import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { MutablePermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/MutablePermissionContext.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionEvents$OnRequest } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionEvents$OnRequest.d.ts'
import type { PermissionEvents$PrepareOfflinePlayer } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionEvents$PrepareOfflinePlayer.d.ts'
import type { PermissionNode } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export class PermissionEvents extends Object {
    static ON_REQUEST: Event<(param0: PermissionContext, param1: PermissionNode<Object>) => Object | null>;
    static PREPARE_OFFLINE_PLAYER: Event<(param0: PermissionContext, param1: MinecraftServer) => CompletableFuture<(param0: MutablePermissionContext) => void>>;
    private constructor()
}