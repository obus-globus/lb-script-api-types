import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SimpleEventPacketPayload_Subtype extends Enum<SimpleEventPacketPayload_Subtype> {
    static DisableCommands: SimpleEventPacketPayload_Subtype;
    static EnableCommands: SimpleEventPacketPayload_Subtype;
    static UninitializedSubtype: SimpleEventPacketPayload_Subtype;
    static UnlockWorldTemplateSettings: SimpleEventPacketPayload_Subtype;
    static getByName(paramarg0: string): SimpleEventPacketPayload_Subtype;
    static getByName(paramarg0: string, paramarg1: SimpleEventPacketPayload_Subtype): SimpleEventPacketPayload_Subtype;
    static getByValue(paramarg0: number): SimpleEventPacketPayload_Subtype;
    static getByValue(paramarg0: number, paramarg1: SimpleEventPacketPayload_Subtype): SimpleEventPacketPayload_Subtype;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SimpleEventPacketPayload_Subtype;
    static values(): SimpleEventPacketPayload_Subtype[];
    private constructor(arg2: number)
    private constructor(arg2: SimpleEventPacketPayload_Subtype)
    readonly value: number;
    getValue(): number;
    name(): "UninitializedSubtype" | "EnableCommands" | "DisableCommands" | "UnlockWorldTemplateSettings";
}