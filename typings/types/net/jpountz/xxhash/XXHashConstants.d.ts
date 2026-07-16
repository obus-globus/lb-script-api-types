import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class XXHashConstants extends Enum<XXHashConstants> {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): XXHashConstants;
    static values(): XXHashConstants[];
    private constructor()
}