import type { UserConnectionViaAPI } from '../../../../com/viaversion/viaversion/UserConnectionViaAPI.d.ts'
import type { ViaAPI } from '../../../../com/viaversion/viaversion/api/ViaAPI.d.ts'
import type { ViaVersionConfig } from '../../../../com/viaversion/viaversion/api/configuration/ViaVersionConfig.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PlatformTask } from '../../../../com/viaversion/viaversion/api/platform/PlatformTask.d.ts'
import type { ViaPlatform } from '../../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { AbstractViaConfig } from '../../../../com/viaversion/viaversion/configuration/AbstractViaConfig.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UserConnectionViaVersionPlatform extends Object implements ViaPlatform<UserConnection> {
    constructor(arg0: File)
    readonly api: UserConnectionViaAPI;
    // private config: AbstractViaConfig;
    readonly dataFolder: File;
    readonly logger: Logger;
    couldBeReloading(): boolean;
    createConfig(): AbstractViaConfig;
    createLogger(arg0: string): Logger;
    createLogger(arg0: string): Logger;
    getApi(): ViaAPI<UserConnection>;
    getConf(): ViaVersionConfig;
    getDataFolder(): File;
    getDump(): JsonObject;
    getLogger(): Logger;
    getPluginVersion(): string;
    getUnsupportedSoftwareClasses(): E[];
    hasPlugin(arg0: string): boolean;
    isProxy(): boolean;
    isProxy(): boolean;
    kickPlayer(arg0: UserConnection, arg1: string): boolean;
    modifyPlayerDetails(arg0: UserConnection, arg1: JsonObject): void;
    modifyServerDetails(arg0: UserConnection, arg1: JsonObject): void;
    onReload(): void;
    runAsync(arg0: () => void): PlatformTask<Object>;
    runRepeatingAsync(arg0: () => void, arg1: number): PlatformTask<Object>;
    runRepeatingSync(arg0: () => void, arg1: number): PlatformTask<Object>;
    runSync(arg0: () => void): PlatformTask<Object>;
    runSync(arg0: () => void, arg1: number): PlatformTask<Object>;
    sendCustomPayload(arg0: UserConnection, arg1: string, arg2: number[]): void;
    sendCustomPayloadToClient(arg0: UserConnection, arg1: string, arg2: number[]): void;
    sendMessage(arg0: UserConnection, arg1: string): void;
}