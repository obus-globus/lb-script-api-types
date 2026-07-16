import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class XXHashJNI extends Enum<XXHashJNI> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): XXHashJNI;
    static values(): XXHashJNI[];
    private constructor()
}