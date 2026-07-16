import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TypeQualifierPart$QualifierType extends Enum<TypeQualifierPart$QualifierType> {
    static INTERPOLATION: TypeQualifierPart$QualifierType;
    static INVARIANT: TypeQualifierPart$QualifierType;
    static LAYOUT: TypeQualifierPart$QualifierType;
    static PRECISE: TypeQualifierPart$QualifierType;
    static PRECISION: TypeQualifierPart$QualifierType;
    static STORAGE: TypeQualifierPart$QualifierType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeQualifierPart$QualifierType;
    static values(): TypeQualifierPart$QualifierType[];
    private constructor()
    name(): "STORAGE" | "LAYOUT" | "PRECISION" | "INTERPOLATION" | "INVARIANT" | "PRECISE";
}