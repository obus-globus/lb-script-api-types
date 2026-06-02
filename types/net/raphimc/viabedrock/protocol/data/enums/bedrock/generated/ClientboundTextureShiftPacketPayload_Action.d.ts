import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientboundTextureShiftPacketPayload_Action extends Enum<ClientboundTextureShiftPacketPayload_Action> {
    static Initialize: ClientboundTextureShiftPacketPayload_Action;
    static Invalid: ClientboundTextureShiftPacketPayload_Action;
    static SetEnabled: ClientboundTextureShiftPacketPayload_Action;
    static Start: ClientboundTextureShiftPacketPayload_Action;
    static Sync: ClientboundTextureShiftPacketPayload_Action;
    static getByName(paramarg0: string): ClientboundTextureShiftPacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: ClientboundTextureShiftPacketPayload_Action): ClientboundTextureShiftPacketPayload_Action;
    static getByValue(paramarg0: number): ClientboundTextureShiftPacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: ClientboundTextureShiftPacketPayload_Action): ClientboundTextureShiftPacketPayload_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundTextureShiftPacketPayload_Action;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ClientboundTextureShiftPacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Initialize" | "Start" | "SetEnabled" | "Sync";
}