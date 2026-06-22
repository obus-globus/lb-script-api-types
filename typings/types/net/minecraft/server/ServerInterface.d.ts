import type { Object } from '../../../java/lang/Object.d.ts'
import type { ServerInfo } from '../../../net/minecraft/server/ServerInfo.d.ts'
import type { DedicatedServerProperties } from '../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
export interface ServerInterface extends Object, ServerInfo{
    getLevelIdName(): string;
    getMaxPlayers(): number;
    getMotd(): string;
    getPlayerCount(): number;
    getPlayerNames(): string[];
    getPluginNames(): string;
    getProperties(): DedicatedServerProperties;
    getServerIp(): string;
    getServerName(): string;
    getServerPort(): number;
    getServerVersion(): string;
    runCommand(command: string): string;
}