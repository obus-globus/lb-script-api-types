import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DiagnosticSeverity extends Enum<DiagnosticSeverity> {
    static Error: DiagnosticSeverity;
    static Hint: DiagnosticSeverity;
    static Information: DiagnosticSeverity;
    static Warning: DiagnosticSeverity;
    static get(paramintValue: number): DiagnosticSeverity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DiagnosticSeverity;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Error" | "Warning" | "Information" | "Hint";
}