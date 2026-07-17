import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTickBase$TickBaseCall extends Enum<ModuleTickBase$TickBaseCall> implements Tagged {
    static Companion: Tagged$Companion;
    static GAME: ModuleTickBase$TickBaseCall;
    static PLAYER: ModuleTickBase$TickBaseCall;
    static getEntries(): ModuleTickBase$TickBaseCall[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTickBase$TickBaseCall;
    static values(): ModuleTickBase$TickBaseCall[];
    private constructor(tag: string, tick: () => void)
    readonly tag: string;
    // private tick: () => void;
    tick(): void;
    name(): "GAME" | "PLAYER";
}