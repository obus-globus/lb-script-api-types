import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientboundDebugRendererPacketPayload_PayloadType extends Enum<ClientboundDebugRendererPacketPayload_PayloadType> {
    static AddDebugMarkerCube: ClientboundDebugRendererPacketPayload_PayloadType;
    static ClearDebugMarkers: ClientboundDebugRendererPacketPayload_PayloadType;
    static Invalid: ClientboundDebugRendererPacketPayload_PayloadType;
    static getByName(paramarg0: string): ClientboundDebugRendererPacketPayload_PayloadType;
    static getByName(paramarg0: string, paramarg1: ClientboundDebugRendererPacketPayload_PayloadType): ClientboundDebugRendererPacketPayload_PayloadType;
    static getByValue(paramarg0: number): ClientboundDebugRendererPacketPayload_PayloadType;
    static getByValue(paramarg0: number, paramarg1: ClientboundDebugRendererPacketPayload_PayloadType): ClientboundDebugRendererPacketPayload_PayloadType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientboundDebugRendererPacketPayload_PayloadType;
    static values(): ClientboundDebugRendererPacketPayload_PayloadType[];
    private constructor(arg2: number)
    private constructor(arg2: ClientboundDebugRendererPacketPayload_PayloadType)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "ClearDebugMarkers" | "AddDebugMarkerCube";
}