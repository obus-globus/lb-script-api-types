import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CoroutineSingletons extends Enum<CoroutineSingletons> implements Serializable {
    static COROUTINE_SUSPENDED: CoroutineSingletons;
    static RESUMED: CoroutineSingletons;
    static UNDECIDED: CoroutineSingletons;
    static getEntries(): CoroutineSingletons[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CoroutineSingletons;
    static values(): CoroutineSingletons[];
    private constructor()
    name(): "COROUTINE_SUSPENDED" | "UNDECIDED" | "RESUMED";
}