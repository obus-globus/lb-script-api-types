import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PacketViolationType extends Enum<PacketViolationType> {
    static PacketMalformed: PacketViolationType;
    static Unknown: PacketViolationType;
    static getByName(paramarg0: string): PacketViolationType;
    static getByName(paramarg0: string, paramarg1: PacketViolationType): PacketViolationType;
    static getByValue(paramarg0: number): PacketViolationType;
    static getByValue(paramarg0: number, paramarg1: PacketViolationType): PacketViolationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PacketViolationType;
    static values(): PacketViolationType[];
    private constructor(arg2: number)
    private constructor(arg2: PacketViolationType)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "PacketMalformed";
}