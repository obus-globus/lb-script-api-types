import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class AppContext$State extends Enum<AppContext$State> {
    static BEING_DISPOSED: AppContext$State;
    static DISPOSED: AppContext$State;
    static VALID: AppContext$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AppContext$State;
    static values(): AppContext$State[];
    private constructor()
    name(): "VALID" | "BEING_DISPOSED" | "DISPOSED";
}