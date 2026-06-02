import type { Expression } from '../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Parser$ForVariableDeclarationListResult extends Object {
    private constructor()
    // private declarationWithInitializerToken: number;
    // private firstBinding: Expression;
    // private missingAssignment: Expression;
    // private secondBinding: Expression;
    addBinding(binding: Expression): void;
    recordDeclarationWithInitializer(token: number): void;
    recordMissingAssignment(binding: Expression): void;
}