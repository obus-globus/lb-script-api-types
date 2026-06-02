import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StableContextOptionValue$UpdateKind extends Enum<StableContextOptionValue$UpdateKind> {
    static INITIALIZE: StableContextOptionValue$UpdateKind;
    static PATCH: StableContextOptionValue$UpdateKind;
    static UPDATE: StableContextOptionValue$UpdateKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StableContextOptionValue$UpdateKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "INITIALIZE" | "UPDATE" | "PATCH";
}