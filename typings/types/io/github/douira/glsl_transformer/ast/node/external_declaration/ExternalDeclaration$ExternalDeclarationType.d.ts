import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ExternalDeclaration$ExternalDeclarationType extends Enum<ExternalDeclaration$ExternalDeclarationType> {
    static CUSTOM_DIRECTIVE: ExternalDeclaration$ExternalDeclarationType;
    static DECLARATION: ExternalDeclaration$ExternalDeclarationType;
    static EMPTY_DECLARATION: ExternalDeclaration$ExternalDeclarationType;
    static EXTENSION_DIRECTIVE: ExternalDeclaration$ExternalDeclarationType;
    static FUNCTION_DEFINITION: ExternalDeclaration$ExternalDeclarationType;
    static INCLUDE_DIRECTIVE: ExternalDeclaration$ExternalDeclarationType;
    static LAYOUT_DEFAULTS: ExternalDeclaration$ExternalDeclarationType;
    static PRAGMA_DIRECTIVE: ExternalDeclaration$ExternalDeclarationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ExternalDeclaration$ExternalDeclarationType;
    static values(): ExternalDeclaration$ExternalDeclarationType[];
    private constructor()
    name(): "FUNCTION_DEFINITION" | "DECLARATION" | "PRAGMA_DIRECTIVE" | "EXTENSION_DIRECTIVE" | "CUSTOM_DIRECTIVE" | "INCLUDE_DIRECTIVE" | "LAYOUT_DEFAULTS" | "EMPTY_DECLARATION";
}