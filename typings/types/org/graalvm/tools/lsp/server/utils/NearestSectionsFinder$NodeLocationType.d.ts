import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NearestSectionsFinder$NodeLocationType extends Enum<NearestSectionsFinder$NodeLocationType> {
    static CONTAINS: NearestSectionsFinder$NodeLocationType;
    static CONTAINS_END: NearestSectionsFinder$NodeLocationType;
    static NEXT: NearestSectionsFinder$NodeLocationType;
    static PREVIOUS: NearestSectionsFinder$NodeLocationType;
    static ROOT: NearestSectionsFinder$NodeLocationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NearestSectionsFinder$NodeLocationType;
    static values(): NearestSectionsFinder$NodeLocationType[];
    private constructor()
    name(): "CONTAINS" | "CONTAINS_END" | "PREVIOUS" | "NEXT" | "ROOT";
}