import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Instruction$Argument$Kind extends Enum<Instruction$Argument$Kind> {
    static BRANCH_PROFILE: Instruction$Argument$Kind;
    static BYTECODE_INDEX: Instruction$Argument$Kind;
    static CONSTANT: Instruction$Argument$Kind;
    static INTEGER: Instruction$Argument$Kind;
    static LOCAL_INDEX: Instruction$Argument$Kind;
    static LOCAL_OFFSET: Instruction$Argument$Kind;
    static NODE_PROFILE: Instruction$Argument$Kind;
    static TAG_NODE: Instruction$Argument$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Instruction$Argument$Kind;
    static values(): Instruction$Argument$Kind[];
    private constructor()
    name(): "CONSTANT" | "BYTECODE_INDEX" | "INTEGER" | "LOCAL_OFFSET" | "LOCAL_INDEX" | "NODE_PROFILE" | "BRANCH_PROFILE" | "TAG_NODE";
}