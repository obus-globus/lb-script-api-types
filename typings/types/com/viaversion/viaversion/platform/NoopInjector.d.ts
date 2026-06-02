import type { ViaInjector } from '../../../../com/viaversion/viaversion/api/platform/ViaInjector.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NoopInjector extends Object implements ViaInjector {
    constructor()
    getDecoderName(): string;
    getDump(): JsonObject;
    getEncoderName(): string;
    getServerProtocolVersion(): ProtocolVersion;
    getServerProtocolVersions(): ProtocolVersion[];
    getServerProtocolVersions(): ProtocolVersion[];
    inject(): void;
    lateProtocolVersionSetting(): boolean;
    uninject(): void;
}