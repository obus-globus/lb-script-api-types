import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftAllowListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftAllowListService.d.ts'
import type { MinecraftBanListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftBanListService.d.ts'
import type { MinecraftExecutorService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftExecutorService.d.ts'
import type { MinecraftGameRuleService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftGameRuleService.d.ts'
import type { MinecraftOperatorListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftOperatorListService.d.ts'
import type { MinecraftPlayerListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftPlayerListService.d.ts'
import type { MinecraftServerSettingsService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftServerSettingsService.d.ts'
import type { MinecraftServerStateService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftServerStateService.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
export class MinecraftApi extends Object {
    static of(paramnotificationManager: NotificationManager): MinecraftApi;
    constructor(notificationManager: NotificationManager, allowListService: MinecraftAllowListService, banListService: MinecraftBanListService, minecraftPlayerListService: MinecraftPlayerListService, gameRuleService: MinecraftGameRuleService, minecraftOperatorListService: MinecraftOperatorListService, minecraftServerSettingsService: MinecraftServerSettingsService, minecraftServerStateService: MinecraftServerStateService, executorService: MinecraftExecutorService)
    // private allowListService: MinecraftAllowListService;
    // private banListService: MinecraftBanListService;
    // private executorService: MinecraftExecutorService;
    // private gameRuleService: MinecraftGameRuleService;
    // private minecraftOperatorListService: MinecraftOperatorListService;
    // private minecraftPlayerListService: MinecraftPlayerListService;
    // private minecraftServerSettingsService: MinecraftServerSettingsService;
    // private minecraftServerStateService: MinecraftServerStateService;
    // private notificationManager: NotificationManager;
    allowListService(): MinecraftAllowListService;
    banListService(): MinecraftBanListService;
    gameRuleService(): MinecraftGameRuleService;
    notificationManager(): NotificationManager;
    operatorListService(): MinecraftOperatorListService;
    playerListService(): MinecraftPlayerListService;
    serverSettingsService(): MinecraftServerSettingsService;
    serverStateService(): MinecraftServerStateService;
    submit(runnable: () => void): CompletableFuture<void>;
    submit<V extends unknown>(supplier: () => V): CompletableFuture<V>;
}