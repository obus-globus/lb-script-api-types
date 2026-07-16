import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CoroutineSingletons extends Enum<CoroutineSingletons> implements Serializable {
    static COROUTINE_SUSPENDED: CoroutineSingletons;
    static RESUMED: CoroutineSingletons;
    static UNDECIDED: CoroutineSingletons;
    static getEntries(): CoroutineSingletons[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CoroutineSingletons;
    static values(): CoroutineSingletons[];
    private constructor()
    name(): "COROUTINE_SUSPENDED" | "UNDECIDED" | "RESUMED";
}