import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LayoutQualifierPart$LayoutQualifierType extends Enum<LayoutQualifierPart$LayoutQualifierType> {
    static NAMED: LayoutQualifierPart$LayoutQualifierType;
    static SHARED: LayoutQualifierPart$LayoutQualifierType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LayoutQualifierPart$LayoutQualifierType;
    static values(): LayoutQualifierPart$LayoutQualifierType[];
    private constructor()
    name(): "NAMED" | "SHARED";
}