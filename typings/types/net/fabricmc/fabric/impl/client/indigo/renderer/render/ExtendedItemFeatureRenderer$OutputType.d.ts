import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ExtendedItemFeatureRenderer$OutputType extends Enum<ExtendedItemFeatureRenderer$OutputType> {
    static FOIL: ExtendedItemFeatureRenderer$OutputType;
    static MAIN: ExtendedItemFeatureRenderer$OutputType;
    static OUTLINE: ExtendedItemFeatureRenderer$OutputType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ExtendedItemFeatureRenderer$OutputType;
    static values(): ExtendedItemFeatureRenderer$OutputType[];
    private constructor()
    name(): "MAIN" | "OUTLINE" | "FOIL";
}