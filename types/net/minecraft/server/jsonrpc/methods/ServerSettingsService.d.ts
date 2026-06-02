import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class ServerSettingsService extends Object {
    static acceptTransfers(paramminecraftApi: MinecraftApi): boolean;
    static allowFlight(paramminecraftApi: MinecraftApi): boolean;
    static autosave(paramminecraftApi: MinecraftApi): boolean;
    static difficulty(paramminecraftApi: MinecraftApi): Difficulty;
    static enforceAllowlist(paramminecraftApi: MinecraftApi): boolean;
    static entityBroadcastRangePercentage(paramminecraftApi: MinecraftApi): number;
    static forceGameMode(paramminecraftApi: MinecraftApi): boolean;
    static gameMode(paramminecraftApi: MinecraftApi): GameType;
    static hidesOnlinePlayers(paramminecraftApi: MinecraftApi): boolean;
    static maxPlayers(paramminecraftApi: MinecraftApi): number;
    static motd(paramminecraftApi: MinecraftApi): string;
    static operatorUserPermissionLevel(paramminecraftApi: MinecraftApi): PermissionLevel;
    static pauseWhenEmpty(paramminecraftApi: MinecraftApi): number;
    static playerIdleTimeout(paramminecraftApi: MinecraftApi): number;
    static repliesToStatus(paramminecraftApi: MinecraftApi): boolean;
    static setAcceptTransfers(paramminecraftApi: MinecraftApi, paramaccept: boolean, paramclientInfo: ClientInfo): boolean;
    static setAllowFlight(paramminecraftApi: MinecraftApi, paramallow: boolean, paramclientInfo: ClientInfo): boolean;
    static setAutosave(paramminecraftApi: MinecraftApi, paramenabled: boolean, paramclientInfo: ClientInfo): boolean;
    static setDifficulty(paramminecraftApi: MinecraftApi, paramdifficulty: Difficulty, paramclientInfo: ClientInfo): Difficulty;
    static setEnforceAllowlist(paramminecraftApi: MinecraftApi, paramenforce: boolean, paramclientInfo: ClientInfo): boolean;
    static setEntityBroadcastRangePercentage(paramminecraftApi: MinecraftApi, parampercentage: number, paramclientInfo: ClientInfo): number;
    static setForceGameMode(paramminecraftApi: MinecraftApi, paramforce: boolean, paramclientInfo: ClientInfo): boolean;
    static setGameMode(paramminecraftApi: MinecraftApi, paramgameMode: GameType, paramclientInfo: ClientInfo): GameType;
    static setHidesOnlinePlayers(paramminecraftApi: MinecraftApi, paramhide: boolean, paramclientInfo: ClientInfo): boolean;
    static setMaxPlayers(paramminecraftApi: MinecraftApi, parammaxPlayers: number, paramclientInfo: ClientInfo): number;
    static setMotd(paramminecraftApi: MinecraftApi, parammotd: string, paramclientInfo: ClientInfo): string;
    static setOperatorUserPermissionLevel(paramminecraftApi: MinecraftApi, paramlevel: PermissionLevel, paramclientInfo: ClientInfo): PermissionLevel;
    static setPauseWhenEmpty(paramminecraftApi: MinecraftApi, paramemptySeconds: number, paramclientInfo: ClientInfo): number;
    static setPlayerIdleTimeout(paramminecraftApi: MinecraftApi, paramidleTime: number, paramclientInfo: ClientInfo): number;
    static setRepliesToStatus(paramminecraftApi: MinecraftApi, paramenable: boolean, paramclientInfo: ClientInfo): boolean;
    static setSimulationDistance(paramminecraftApi: MinecraftApi, paramsimulationDistance: number, paramclientInfo: ClientInfo): number;
    static setSpawnProtection(paramminecraftApi: MinecraftApi, paramspawnProtection: number, paramclientInfo: ClientInfo): number;
    static setStatusHeartbeatInterval(paramminecraftApi: MinecraftApi, paramstatusHeartbeatInterval: number, paramclientInfo: ClientInfo): number;
    static setUsingAllowlist(paramminecraftApi: MinecraftApi, paramuse: boolean, paramclientInfo: ClientInfo): boolean;
    static setViewDistance(paramminecraftApi: MinecraftApi, paramviewDistance: number, paramclientInfo: ClientInfo): number;
    static simulationDistance(paramminecraftApi: MinecraftApi): number;
    static spawnProtection(paramminecraftApi: MinecraftApi): number;
    static statusHeartbeatInterval(paramminecraftApi: MinecraftApi): number;
    static usingAllowlist(paramminecraftApi: MinecraftApi): boolean;
    static viewDistance(paramminecraftApi: MinecraftApi): number;
    constructor()
}