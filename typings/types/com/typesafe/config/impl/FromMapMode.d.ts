import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FromMapMode extends Enum<FromMapMode> {
    static KEYS_ARE_KEYS: FromMapMode;
    static KEYS_ARE_PATHS: FromMapMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FromMapMode;
    static values(): FromMapMode[];
    private constructor()
    name(): "KEYS_ARE_PATHS" | "KEYS_ARE_KEYS";
}