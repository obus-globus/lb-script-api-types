import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftServerSettingsService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftServerSettingsService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { LevelBasedPermissionSet } from '../../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class MinecraftServerSettingsServiceImpl extends Object implements MinecraftServerSettingsService {
    constructor(notificationManager: NotificationManager, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private notificationManager: NotificationManager;
    acceptsTransfers(): boolean;
    allowFlight(): boolean;
    forceGameMode(): boolean;
    getDifficulty(): Difficulty;
    getEntityBroadcastRangePercentage(): number;
    getGameMode(): GameType;
    getMaxPlayers(): number;
    getMotd(): string;
    getOperatorUserPermissions(): LevelBasedPermissionSet;
    getPauseWhenEmptySeconds(): number;
    getPlayerIdleTimeout(): number;
    getSimulationDistance(): number;
    getSpawnProtectionRadius(): number;
    getStatusHeartbeatInterval(): number;
    getViewDistance(): number;
    hidesOnlinePlayers(): boolean;
    isAutoSave(): boolean;
    isEnforceWhitelist(): boolean;
    isUsingWhitelist(): boolean;
    repliesToStatus(): boolean;
    // private server(): DedicatedServer;
    setAcceptsTransfers(accept: boolean, clientInfo: ClientInfo): boolean;
    setAllowFlight(allow: boolean, clientInfo: ClientInfo): boolean;
    setAutoSave(enabled: boolean, clientInfo: ClientInfo): boolean;
    setDifficulty(difficulty: Difficulty, clientInfo: ClientInfo): Difficulty;
    setEnforceWhitelist(enforce: boolean, clientInfo: ClientInfo): boolean;
    setEntityBroadcastRangePercentage(percentage: number, clientInfo: ClientInfo): number;
    setForceGameMode(force: boolean, clientInfo: ClientInfo): boolean;
    setGameMode(gameMode: GameType, clientInfo: ClientInfo): GameType;
    setHidesOnlinePlayers(hide: boolean, clientInfo: ClientInfo): boolean;
    setMaxPlayers(maxPlayers: number, clientInfo: ClientInfo): number;
    setMotd(motd: string, clientInfo: ClientInfo): string;
    setOperatorUserPermissions(permissions: LevelBasedPermissionSet, clientInfo: ClientInfo): LevelBasedPermissionSet;
    setPauseWhenEmptySeconds(emptySeconds: number, clientInfo: ClientInfo): number;
    setPlayerIdleTimeout(idleTime: number, clientInfo: ClientInfo): number;
    setRepliesToStatus(enable: boolean, clientInfo: ClientInfo): boolean;
    setSimulationDistance(simulationDistance: number, clientInfo: ClientInfo): number;
    setSpawnProtectionRadius(spawnProtection: number, clientInfo: ClientInfo): number;
    setStatusHeartbeatInterval(statusHeartbeatInterval: number, clientInfo: ClientInfo): number;
    setUsingWhitelist(use: boolean, clientInfo: ClientInfo): boolean;
    setViewDistance(viewDistance: number, clientInfo: ClientInfo): number;
}