import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { CodecContext } from '../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { CodecContext$RegistryAccess } from '../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext$RegistryAccess.d.ts'
import type { StructuredDataKey } from '../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CodecRegistryContext extends Record implements CodecContext {
    constructor(protocol: Protocol<any, any, any, any>, registryAccess: CodecContext$RegistryAccess, mapped: boolean)
    // private mapped: boolean;
    // private protocol: Protocol<any, any, any, any>;
    // private registryAccess: CodecContext$RegistryAccess;
    connection(): UserConnection;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSupported(arg0: StructuredDataKey<Object>): boolean;
    mapped(): boolean;
    protocol(): Protocol<any, any, any, any>;
    registryAccess(): CodecContext$RegistryAccess;
    toString(): string;
}