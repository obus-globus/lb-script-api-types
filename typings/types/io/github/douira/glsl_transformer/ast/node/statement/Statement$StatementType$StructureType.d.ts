import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Statement$StatementType$StructureType extends Enum<Statement$StatementType$StructureType> {
    static MANY: Statement$StatementType$StructureType;
    static SEMI_TERMINAL: Statement$StatementType$StructureType;
    static TERMINAL: Statement$StatementType$StructureType;
    static UNARY: Statement$StatementType$StructureType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Statement$StatementType$StructureType;
    static values(): Statement$StatementType$StructureType[];
    private constructor()
    name(): "SEMI_TERMINAL" | "TERMINAL" | "UNARY" | "MANY";
}