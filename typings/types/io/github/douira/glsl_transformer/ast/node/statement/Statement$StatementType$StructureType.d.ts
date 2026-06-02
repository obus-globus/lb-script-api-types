import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Statement$StatementType$StructureType extends Enum<Statement$StatementType$StructureType> {
    static MANY: Statement$StatementType$StructureType;
    static SEMI_TERMINAL: Statement$StatementType$StructureType;
    static TERMINAL: Statement$StatementType$StructureType;
    static UNARY: Statement$StatementType$StructureType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Statement$StatementType$StructureType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SEMI_TERMINAL" | "TERMINAL" | "UNARY" | "MANY";
}