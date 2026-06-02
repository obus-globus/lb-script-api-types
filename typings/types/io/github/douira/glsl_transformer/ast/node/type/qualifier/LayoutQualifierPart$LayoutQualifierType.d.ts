import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LayoutQualifierPart$LayoutQualifierType extends Enum<LayoutQualifierPart$LayoutQualifierType> {
    static NAMED: LayoutQualifierPart$LayoutQualifierType;
    static SHARED: LayoutQualifierPart$LayoutQualifierType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LayoutQualifierPart$LayoutQualifierType;
    static values(): (Object | null)[];
    private constructor()
    name(): "NAMED" | "SHARED";
}