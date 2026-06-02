import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientboundDebugRendererPacket_Type extends Enum<ClientboundDebugRendererPacket_Type> {
    static AddDebugMarkerCube: ClientboundDebugRendererPacket_Type;
    static ClearDebugMarkers: ClientboundDebugRendererPacket_Type;
    static Invalid: ClientboundDebugRendererPacket_Type;
    static getByName(paramarg0: string): ClientboundDebugRendererPacket_Type;
    static getByName(paramarg0: string, paramarg1: ClientboundDebugRendererPacket_Type): ClientboundDebugRendererPacket_Type;
    static getByValue(paramarg0: number): ClientboundDebugRendererPacket_Type;
    static getByValue(paramarg0: number, paramarg1: ClientboundDebugRendererPacket_Type): ClientboundDebugRendererPacket_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundDebugRendererPacket_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ClientboundDebugRendererPacket_Type)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "ClearDebugMarkers" | "AddDebugMarkerCube";
}