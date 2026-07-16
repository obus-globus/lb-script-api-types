import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class QuitStrategy extends Enum<QuitStrategy> {
    static CLOSE_ALL_WINDOWS: QuitStrategy;
    static NORMAL_EXIT: QuitStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): QuitStrategy;
    static values(): QuitStrategy[];
    private constructor()
    name(): "NORMAL_EXIT" | "CLOSE_ALL_WINDOWS";
}