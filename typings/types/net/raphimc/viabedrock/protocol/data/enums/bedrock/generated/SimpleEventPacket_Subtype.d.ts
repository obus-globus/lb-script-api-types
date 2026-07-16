import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SimpleEventPacket_Subtype extends Enum<SimpleEventPacket_Subtype> {
    static DisableCommands: SimpleEventPacket_Subtype;
    static EnableCommands: SimpleEventPacket_Subtype;
    static UninitializedSubtype: SimpleEventPacket_Subtype;
    static UnlockWorldTemplateSettings: SimpleEventPacket_Subtype;
    static getByName(paramarg0: string): SimpleEventPacket_Subtype;
    static getByName(paramarg0: string, paramarg1: SimpleEventPacket_Subtype): SimpleEventPacket_Subtype;
    static getByValue(paramarg0: number): SimpleEventPacket_Subtype;
    static getByValue(paramarg0: number, paramarg1: SimpleEventPacket_Subtype): SimpleEventPacket_Subtype;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SimpleEventPacket_Subtype;
    static values(): SimpleEventPacket_Subtype[];
    private constructor(arg2: number)
    private constructor(arg2: SimpleEventPacket_Subtype)
    readonly value: number;
    getValue(): number;
    name(): "UninitializedSubtype" | "EnableCommands" | "DisableCommands" | "UnlockWorldTemplateSettings";
}