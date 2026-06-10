import type { ViaAPI } from '../../../../../com/viaversion/viaversion/api/ViaAPI.d.ts'
import type { ViaVersionConfig } from '../../../../../com/viaversion/viaversion/api/configuration/ViaVersionConfig.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PlatformTask } from '../../../../../com/viaversion/viaversion/api/platform/PlatformTask.d.ts'
import type { UnsupportedSoftware } from '../../../../../com/viaversion/viaversion/api/platform/UnsupportedSoftware.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaPlatform<T extends Object | number | string | boolean> extends Object {
    couldBeReloading(): boolean;
    createLogger(arg0: string): Logger;
    getApi(): ViaAPI<T>;
    getConf(): ViaVersionConfig;
    getDataFolder(): File;
    getDump(): JsonObject;
    getLogger(): Logger;
    getPlatformName(): string;
    getPlatformVersion(): string;
    getPluginVersion(): string;
    getUnsupportedSoftwareClasses(): UnsupportedSoftware[];
    hasPlugin(arg0: string): boolean;
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