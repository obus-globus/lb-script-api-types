import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DiagnosticTag extends Enum<DiagnosticTag> {
    static Deprecated: DiagnosticTag;
    static Unnecessary: DiagnosticTag;
    static get(paramintValue: number): DiagnosticTag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DiagnosticTag;
    static values(): DiagnosticTag[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Unnecessary" | "Deprecated";
}