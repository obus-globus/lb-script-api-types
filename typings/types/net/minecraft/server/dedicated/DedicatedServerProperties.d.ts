import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { MinecraftServer$ServerResourcePackInfo } from '../../../../net/minecraft/server/MinecraftServer$ServerResourcePackInfo.d.ts'
import type { DedicatedServerProperties$WorldDimensionData } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties$WorldDimensionData.d.ts'
import type { Settings } from '../../../../net/minecraft/server/dedicated/Settings.d.ts'
import type { Settings$MutableValue } from '../../../../net/minecraft/server/dedicated/Settings$MutableValue.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { DataPackConfig } from '../../../../net/minecraft/world/level/DataPackConfig.d.ts'
import type { WorldDimensions } from '../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
import type { WorldOptions } from '../../../../net/minecraft/world/level/levelgen/WorldOptions.d.ts'
export class DedicatedServerProperties extends Settings<DedicatedServerProperties> {
    static MANAGEMENT_SERVER_TLS_ENABLED_KEY: string;
    static MANAGEMENT_SERVER_TLS_KEYSTORE_KEY: string;
    static MANAGEMENT_SERVER_TLS_KEYSTORE_PASSWORD_KEY: string;
    static deserializePermission(paramvalue: string): LevelBasedPermissionSet;
    static fromFile(paramfile: Path): DedicatedServerProperties;
    static loadFromFile(paramfile: Path): { [key: string]: any };
    static serializePermission(parampermission: LevelBasedPermissionSet): string;
    constructor(settings: { [key: string]: any })
    acceptsTransfers: Settings$MutableValue<Object>;
    allowFlight: Settings$MutableValue<Object>;
    announcePlayerAchievements: boolean;
    broadcastConsoleToOps: boolean;
    broadcastRconToOps: boolean;
    bugReportLink: string;
    chatSpamThresholdSeconds: number;
    codeOfConduct: boolean;
    commandSpamThresholdSeconds: number;
    difficulty: Settings$MutableValue<Object>;
    enableJmxMonitoring: boolean;
    enableQuery: boolean;
    enableRcon: boolean;
    enableStatus: Settings$MutableValue<Object>;
    enforceSecureProfile: boolean;
    enforceWhitelist: Settings$MutableValue<Object>;
    entityBroadcastRangePercentage: Settings$MutableValue<Object>;
    forceGameMode: Settings$MutableValue<Object>;
    functionPermissions: LevelBasedPermissionSet;
    gameMode: Settings$MutableValue<Object>;
    hardcore: boolean;
    hideOnlinePlayers: Settings$MutableValue<Object>;
    initialDataPackConfiguration: DataPackConfig;
    levelName: string;
    logIPs: boolean;
    managementServerAllowedOrigins: string;
    managementServerEnabled: boolean;
    managementServerHost: string;
    managementServerPort: number;
    managementServerSecret: string;
    managementServerTlsEnabled: boolean;
    managementServerTlsKeystore: string;
    managementServerTlsKeystorePassword: string;
    maxChainedNeighborUpdates: number;
    maxPlayers: Settings$MutableValue<Object>;
    maxTickTime: number;
    maxWorldSize: number;
    motd: Settings$MutableValue<Object>;
    networkCompressionThreshold: number;
    onlineMode: boolean;
    opPermissions: Settings$MutableValue<Object>;
    pauseWhenEmptySeconds: Settings$MutableValue<Object>;
    playerIdleTimeout: Settings$MutableValue<Object>;
    preventProxyConnections: boolean;
    queryPort: number;
    rateLimitPacketsPerSecond: number;
    rconPassword: string;
    rconPort: number;
    regionFileComression: string;
    serverIp: string;
    serverPort: number;
    serverResourcePackInfo: Optional<MinecraftServer$ServerResourcePackInfo>;
    simulationDistance: Settings$MutableValue<Object>;
    spawnProtection: Settings$MutableValue<Object>;
    statusHeartbeatInterval: Settings$MutableValue<Object>;
    syncChunkWrites: boolean;
    textFilteringConfig: string;
    textFilteringVersion: number;
    useNativeTransport: boolean;
    viewDistance: Settings$MutableValue<Object>;
    whiteList: Settings$MutableValue<Object>;
    // private worldDimensionData: DedicatedServerProperties$WorldDimensionData;
    worldOptions: WorldOptions;
    createDimensions(registries: HolderLookup$Provider): WorldDimensions;
    reload(registryAccess: RegistryAccess, properties: { [key: string]: any }): DedicatedServerProperties;
}