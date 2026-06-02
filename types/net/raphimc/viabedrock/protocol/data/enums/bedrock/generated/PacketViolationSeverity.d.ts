import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PacketViolationSeverity extends Enum<PacketViolationSeverity> {
    static FinalWarning: PacketViolationSeverity;
    static TerminatingConnection: PacketViolationSeverity;
    static Unknown: PacketViolationSeverity;
    static Warning: PacketViolationSeverity;
    static getByName(paramarg0: string): PacketViolationSeverity;
    static getByName(paramarg0: string, paramarg1: PacketViolationSeverity): PacketViolationSeverity;
    static getByValue(paramarg0: number): PacketViolationSeverity;
    static getByValue(paramarg0: number, paramarg1: PacketViolationSeverity): PacketViolationSeverity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PacketViolationSeverity;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: PacketViolationSeverity)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "Warning" | "FinalWarning" | "TerminatingConnection";
}