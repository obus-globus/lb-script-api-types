import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DiagnosticSeverity extends Enum<DiagnosticSeverity> {
    static Error: DiagnosticSeverity;
    static Hint: DiagnosticSeverity;
    static Information: DiagnosticSeverity;
    static Warning: DiagnosticSeverity;
    static get(paramintValue: number): DiagnosticSeverity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DiagnosticSeverity;
    static values(): DiagnosticSeverity[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Error" | "Warning" | "Information" | "Hint";
}