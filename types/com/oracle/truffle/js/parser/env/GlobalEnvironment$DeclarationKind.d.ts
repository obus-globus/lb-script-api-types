import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GlobalEnvironment$DeclarationKind extends Enum<GlobalEnvironment$DeclarationKind> {
    static Const: GlobalEnvironment$DeclarationKind;
    static ConstDeclared: GlobalEnvironment$DeclarationKind;
    static Let: GlobalEnvironment$DeclarationKind;
    static LetDeclared: GlobalEnvironment$DeclarationKind;
    static Var: GlobalEnvironment$DeclarationKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GlobalEnvironment$DeclarationKind;
    static values(): (Object | null)[];
    private constructor(isLexical: boolean, isConst: boolean, isDeclared: boolean)
    // private isConst: boolean;
    // private isDeclared: boolean;
    // private isLexical: boolean;
    isConst(): boolean;
    isDeclared(): boolean;
    isLexical(): boolean;
    withDeclared(declared: boolean): GlobalEnvironment$DeclarationKind;
    name(): "Var" | "Let" | "LetDeclared" | "Const" | "ConstDeclared";
}