import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { AbstractSimpleProtocol } from '../../../../com/viaversion/viaversion/protocol/AbstractSimpleProtocol.d.ts'
export class NetherNetStatusProtocol extends AbstractSimpleProtocol {
    static INSTANCE: NetherNetStatusProtocol;
    private constructor()
    // private createPlayerSample(arg0: string): JsonObject;
    init(arg0: UserConnection): void;
    isBaseProtocol(): boolean;
    registerPackets(): void;
}