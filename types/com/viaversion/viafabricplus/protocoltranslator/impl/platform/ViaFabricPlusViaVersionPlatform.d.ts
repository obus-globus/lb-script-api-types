import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractViaConfig } from '../../../../../../com/viaversion/viaversion/configuration/AbstractViaConfig.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { UserConnectionViaVersionPlatform } from '../../../../../../com/viaversion/viaversion/platform/UserConnectionViaVersionPlatform.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
export class ViaFabricPlusViaVersionPlatform extends UserConnectionViaVersionPlatform {
    constructor(arg0: File)
    createConfig(): AbstractViaConfig;
    createLogger(arg0: string): Logger;
    getDump(): JsonObject;
    getPlatformName(): string;
    getPlatformVersion(): string;
    sendCustomPayload(arg0: UserConnection, arg1: string, arg2: number[]): void;
    sendCustomPayloadToClient(arg0: UserConnection, arg1: string, arg2: number[]): void;
}