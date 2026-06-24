import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TraceSignatureVisitor$Task extends Enum<TraceSignatureVisitor$Task> {
    static END_ARRAY_TYPE: TraceSignatureVisitor$Task;
    static END_EMPTY_TYPE_ARGUMENTS: TraceSignatureVisitor$Task;
    static END_NON_EMPTY_TYPE_ARGUMENTS: TraceSignatureVisitor$Task;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TraceSignatureVisitor$Task;
    static values(): (Object | null)[];
    private constructor()
    name(): "END_ARRAY_TYPE" | "END_EMPTY_TYPE_ARGUMENTS" | "END_NON_EMPTY_TYPE_ARGUMENTS";
}