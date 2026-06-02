import type { Object } from '../../../java/lang/Object.d.ts'
import type { ServerInfo } from '../../../net/minecraft/server/ServerInfo.d.ts'
import type { DedicatedServerProperties } from '../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
export interface ServerInterface extends Object, ServerInfo{
    getLevelIdName(): string;
    getPlayerNames(): string[];
    getPluginNames(): string;
    getProperties(): DedicatedServerProperties;
    getServerIp(): string;
    getServerName(): string;
    getServerPort(): number;
    runCommand(command: string): string;
}