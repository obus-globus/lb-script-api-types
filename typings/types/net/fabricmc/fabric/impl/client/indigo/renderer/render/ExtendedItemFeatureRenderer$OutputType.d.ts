import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ExtendedItemFeatureRenderer$OutputType extends Enum<ExtendedItemFeatureRenderer$OutputType> {
    static FOIL: ExtendedItemFeatureRenderer$OutputType;
    static MAIN: ExtendedItemFeatureRenderer$OutputType;
    static OUTLINE: ExtendedItemFeatureRenderer$OutputType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExtendedItemFeatureRenderer$OutputType;
    static values(): (Object | null)[];
    private constructor()
    name(): "MAIN" | "OUTLINE" | "FOIL";
}