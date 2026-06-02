import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { AbstractSimpleProtocol } from '../../../../com/viaversion/viaversion/protocol/AbstractSimpleProtocol.d.ts'
export class RakNetStatusProtocol extends AbstractSimpleProtocol {
    static INSTANCE: RakNetStatusProtocol;
    private constructor()
    // private createPlayerSample(arg0: string): JsonObject;
    isBaseProtocol(): boolean;
    registerPackets(): void;
}