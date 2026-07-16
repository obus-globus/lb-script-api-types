import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LabTablePacketPayload_Type extends Enum<LabTablePacketPayload_Type> {
    static Reset: LabTablePacketPayload_Type;
    static StartCombine: LabTablePacketPayload_Type;
    static StartReaction: LabTablePacketPayload_Type;
    static getByName(paramarg0: string): LabTablePacketPayload_Type;
    static getByName(paramarg0: string, paramarg1: LabTablePacketPayload_Type): LabTablePacketPayload_Type;
    static getByValue(paramarg0: number): LabTablePacketPayload_Type;
    static getByValue(paramarg0: number, paramarg1: LabTablePacketPayload_Type): LabTablePacketPayload_Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LabTablePacketPayload_Type;
    static values(): LabTablePacketPayload_Type[];
    private constructor(arg2: number)
    private constructor(arg2: LabTablePacketPayload_Type)
    readonly value: number;
    getValue(): number;
    name(): "StartCombine" | "StartReaction" | "Reset";
}