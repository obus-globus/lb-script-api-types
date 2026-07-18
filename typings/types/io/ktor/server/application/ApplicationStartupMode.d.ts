import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ApplicationStartupMode extends Enum<ApplicationStartupMode> {
    static CONCURRENT: ApplicationStartupMode;
    static SEQUENTIAL: ApplicationStartupMode;
    static getEntries(): ApplicationStartupMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ApplicationStartupMode;
    static values(): ApplicationStartupMode[];
    private constructor()
    name(): "SEQUENTIAL" | "CONCURRENT";
}