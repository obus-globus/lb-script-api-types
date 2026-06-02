import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CheckMethodAdapter$Method extends Enum<CheckMethodAdapter$Method> {
    static VISIT_FIELD_INSN: CheckMethodAdapter$Method;
    static VISIT_INSN: CheckMethodAdapter$Method;
    static VISIT_INT_INSN: CheckMethodAdapter$Method;
    static VISIT_JUMP_INSN: CheckMethodAdapter$Method;
    static VISIT_METHOD_INSN: CheckMethodAdapter$Method;
    static VISIT_TYPE_INSN: CheckMethodAdapter$Method;
    static VISIT_VAR_INSN: CheckMethodAdapter$Method;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CheckMethodAdapter$Method;
    static values(): (Object | null)[];
    private constructor()
    name(): "VISIT_INSN" | "VISIT_INT_INSN" | "VISIT_VAR_INSN" | "VISIT_TYPE_INSN" | "VISIT_FIELD_INSN" | "VISIT_METHOD_INSN" | "VISIT_JUMP_INSN";
}