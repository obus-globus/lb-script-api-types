import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Declaration$DeclarationType extends Enum<Declaration$DeclarationType> {
    static FUNCTION: Declaration$DeclarationType;
    static INTERFACE_BLOCK: Declaration$DeclarationType;
    static PRECISION: Declaration$DeclarationType;
    static TYPE_AND_INIT: Declaration$DeclarationType;
    static VARIABLE: Declaration$DeclarationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Declaration$DeclarationType;
    static values(): (Object | null)[];
    private constructor()
    name(): "FUNCTION" | "TYPE_AND_INIT" | "PRECISION" | "INTERFACE_BLOCK" | "VARIABLE";
}