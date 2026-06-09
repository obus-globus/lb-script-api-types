import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PlatformTask } from '../../../../../com/viaversion/viaversion/api/platform/PlatformTask.d.ts'
import type { ProtocolDetectorService } from '../../../../../com/viaversion/viaversion/api/platform/ProtocolDetectorService.d.ts'
import type { ViaPlatform } from '../../../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaServerProxyPlatform<T extends Object | number | string | boolean> extends ViaPlatform<T>, Object {
    couldBeReloading(): boolean;
    createLogger(arg0: string): Logger;
    getDump(): JsonObject;
    getPluginVersion(): string;
    getUnsupportedSoftwareClasses(): E[];
    hasPlugin(arg0: string): boolean;
    isProxy(): boolean;
    kickPlayer(arg0: UserConnection, arg1: string): boolean;
    modifyPlayerDetails(arg0: UserConnection, arg1: JsonObject): void;
    modifyServerDetails(arg0: UserConnection, arg1: JsonObject): void;
    onReload(): void;
    protocolDetectorService(): ProtocolDetectorService;
    runAsync(arg0: () => void): PlatformTask<Object>;
    runRepeatingAsync(arg0: () => void, arg1: number): PlatformTask<Object>;
    runRepeatingSync(arg0: () => void, arg1: number): PlatformTask<Object>;
    runSync(arg0: () => void): PlatformTask<Object>;
    runSync(arg0: () => void, arg1: number): PlatformTask<Object>;
    sendCustomPayload(arg0: UserConnection, arg1: string, arg2: number[]): void;
    sendCustomPayloadToClient(arg0: UserConnection, arg1: string, arg2: number[]): void;
    sendMessage(arg0: UserConnection, arg1: string): void;
}