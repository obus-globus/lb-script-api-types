import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Word$Opcode extends Enum<Word$Opcode> {
    static ARITHMETIC: Word$Opcode;
    static CAS_POINTER: Word$Opcode;
    static COMPARISON: Word$Opcode;
    static INITIALIZE: Word$Opcode;
    static IS_NON_NULL: Word$Opcode;
    static IS_NULL: Word$Opcode;
    static NOT: Word$Opcode;
    static OBJECT_TO_TRACKED: Word$Opcode;
    static OBJECT_TO_UNTRACKED: Word$Opcode;
    static READ_BARRIERED: Word$Opcode;
    static READ_BARRIERED_VOLATILE: Word$Opcode;
    static READ_OBJECT: Word$Opcode;
    static READ_POINTER: Word$Opcode;
    static READ_POINTER_VOLATILE: Word$Opcode;
    static TO_OBJECT: Word$Opcode;
    static TO_OBJECT_NON_NULL: Word$Opcode;
    static TO_RAW_VALUE: Word$Opcode;
    static TO_TYPED_OBJECT: Word$Opcode;
    static WRITE_BARRIERED: Word$Opcode;
    static WRITE_OBJECT: Word$Opcode;
    static WRITE_POINTER: Word$Opcode;
    static WRITE_POINTER_SIDE_EFFECT_FREE: Word$Opcode;
    static WRITE_POINTER_VOLATILE: Word$Opcode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Word$Opcode;
    static values(): Word$Opcode[];
    private constructor()
    name(): "ARITHMETIC" | "COMPARISON" | "IS_NULL" | "IS_NON_NULL" | "NOT" | "READ_POINTER" | "READ_POINTER_VOLATILE" | "READ_OBJECT" | "READ_BARRIERED" | "READ_BARRIERED_VOLATILE" | "WRITE_POINTER" | "WRITE_POINTER_SIDE_EFFECT_FREE" | "WRITE_POINTER_VOLATILE" | "WRITE_OBJECT" | "WRITE_BARRIERED" | "CAS_POINTER" | "INITIALIZE" | "OBJECT_TO_TRACKED" | "OBJECT_TO_UNTRACKED" | "TO_OBJECT" | "TO_TYPED_OBJECT" | "TO_OBJECT_NON_NULL" | "TO_RAW_VALUE";
}