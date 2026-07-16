import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CaseLabelStatement$CaseLabelType extends Enum<CaseLabelStatement$CaseLabelType> {
    static CASE: CaseLabelStatement$CaseLabelType;
    static DEFAULT: CaseLabelStatement$CaseLabelType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CaseLabelStatement$CaseLabelType;
    static values(): CaseLabelStatement$CaseLabelType[];
    private constructor()
    name(): "CASE" | "DEFAULT";
}