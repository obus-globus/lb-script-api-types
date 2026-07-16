import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class RequestAbilityPacketPayload_Type extends Enum<RequestAbilityPacketPayload_Type> {
    static Bool: RequestAbilityPacketPayload_Type;
    static Float: RequestAbilityPacketPayload_Type;
    static Unset: RequestAbilityPacketPayload_Type;
    static getByName(paramarg0: string): RequestAbilityPacketPayload_Type;
    static getByName(paramarg0: string, paramarg1: RequestAbilityPacketPayload_Type): RequestAbilityPacketPayload_Type;
    static getByValue(paramarg0: number): RequestAbilityPacketPayload_Type;
    static getByValue(paramarg0: number, paramarg1: RequestAbilityPacketPayload_Type): RequestAbilityPacketPayload_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RequestAbilityPacketPayload_Type;
    static values(): RequestAbilityPacketPayload_Type[];
    private constructor(arg2: number)
    private constructor(arg2: RequestAbilityPacketPayload_Type)
    readonly value: number;
    getValue(): number;
    name(): "Unset" | "Bool" | "Float";
}