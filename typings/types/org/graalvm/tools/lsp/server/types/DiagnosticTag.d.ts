import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DiagnosticTag extends Enum<DiagnosticTag> {
    static Deprecated: DiagnosticTag;
    static Unnecessary: DiagnosticTag;
    static get(paramintValue: number): DiagnosticTag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DiagnosticTag;
    static values(): DiagnosticTag[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Unnecessary" | "Deprecated";
}