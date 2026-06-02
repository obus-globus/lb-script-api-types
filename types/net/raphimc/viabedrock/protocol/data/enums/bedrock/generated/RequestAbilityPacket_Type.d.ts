import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class RequestAbilityPacket_Type extends Enum<RequestAbilityPacket_Type> {
    static Bool: RequestAbilityPacket_Type;
    static Float: RequestAbilityPacket_Type;
    static Unset: RequestAbilityPacket_Type;
    static getByName(paramarg0: string): RequestAbilityPacket_Type;
    static getByName(paramarg0: string, paramarg1: RequestAbilityPacket_Type): RequestAbilityPacket_Type;
    static getByValue(paramarg0: number): RequestAbilityPacket_Type;
    static getByValue(paramarg0: number, paramarg1: RequestAbilityPacket_Type): RequestAbilityPacket_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RequestAbilityPacket_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: RequestAbilityPacket_Type)
    readonly value: number;
    getValue(): number;
    name(): "Unset" | "Bool" | "Float";
}