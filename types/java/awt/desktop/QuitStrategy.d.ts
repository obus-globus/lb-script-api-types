import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class QuitStrategy extends Enum<QuitStrategy> {
    static CLOSE_ALL_WINDOWS: QuitStrategy;
    static NORMAL_EXIT: QuitStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): QuitStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "NORMAL_EXIT" | "CLOSE_ALL_WINDOWS";
}