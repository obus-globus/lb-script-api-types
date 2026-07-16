import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TypeSpecifier$SpecifierType extends Enum<TypeSpecifier$SpecifierType> {
    static BUILTIN_NUMERIC: TypeSpecifier$SpecifierType;
    static BULTIN_FIXED: TypeSpecifier$SpecifierType;
    static REFERENCE: TypeSpecifier$SpecifierType;
    static STRUCT: TypeSpecifier$SpecifierType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeSpecifier$SpecifierType;
    static values(): TypeSpecifier$SpecifierType[];
    private constructor()
    name(): "BUILTIN_NUMERIC" | "BULTIN_FIXED" | "STRUCT" | "REFERENCE";
}