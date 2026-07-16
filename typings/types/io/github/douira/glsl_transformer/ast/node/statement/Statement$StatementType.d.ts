import type { Statement$StatementType$StructureType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType$StructureType.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Statement$StatementType extends Enum<Statement$StatementType> {
    static BREAK: Statement$StatementType;
    static CASE: Statement$StatementType;
    static COMPOUND: Statement$StatementType;
    static CONTINUE: Statement$StatementType;
    static DECLARATION: Statement$StatementType;
    static DEFAULT: Statement$StatementType;
    static DEMOTE: Statement$StatementType;
    static DISCARD: Statement$StatementType;
    static DO_WHILE_LOOP: Statement$StatementType;
    static EMPTY: Statement$StatementType;
    static EXPRESSION: Statement$StatementType;
    static FOR_LOOP: Statement$StatementType;
    static IGNORE_INTERSECTION: Statement$StatementType;
    static RETURN: Statement$StatementType;
    static SELECTION: Statement$StatementType;
    static SWITCH: Statement$StatementType;
    static TERMINATE_RAY: Statement$StatementType;
    static WHILE_LOOP: Statement$StatementType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Statement$StatementType;
    static values(): Statement$StatementType[];
    private constructor(arg2: Statement$StatementType$StructureType)
    structureType: Statement$StatementType$StructureType;
    name(): "COMPOUND" | "DECLARATION" | "EXPRESSION" | "EMPTY" | "SELECTION" | "SWITCH" | "CASE" | "DEFAULT" | "FOR_LOOP" | "WHILE_LOOP" | "DO_WHILE_LOOP" | "CONTINUE" | "BREAK" | "RETURN" | "DISCARD" | "DEMOTE" | "IGNORE_INTERSECTION" | "TERMINATE_RAY";
}