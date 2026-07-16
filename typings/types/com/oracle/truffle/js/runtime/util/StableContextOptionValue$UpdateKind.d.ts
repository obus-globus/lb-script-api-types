import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StableContextOptionValue$UpdateKind extends Enum<StableContextOptionValue$UpdateKind> {
    static INITIALIZE: StableContextOptionValue$UpdateKind;
    static PATCH: StableContextOptionValue$UpdateKind;
    static UPDATE: StableContextOptionValue$UpdateKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StableContextOptionValue$UpdateKind;
    static values(): StableContextOptionValue$UpdateKind[];
    private constructor()
    name(): "INITIALIZE" | "UPDATE" | "PATCH";
}