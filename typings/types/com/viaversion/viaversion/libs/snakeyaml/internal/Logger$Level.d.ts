import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { System$Logger$Level } from '../../../../../../java/lang/System$Logger$Level.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Logger$Level extends Enum<Logger$Level> {
    static DEBUG: Logger$Level;
    static WARNING: Logger$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Logger$Level;
    static values(): Logger$Level[];
    private constructor(arg2: System$Logger$Level)
    // private level: System$Logger$Level;
    name(): "WARNING" | "DEBUG";
}