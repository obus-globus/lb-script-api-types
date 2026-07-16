import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EpollMode extends Enum<EpollMode> {
    static EDGE_TRIGGERED: EpollMode;
    static LEVEL_TRIGGERED: EpollMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EpollMode;
    static values(): EpollMode[];
    private constructor()
    name(): "EDGE_TRIGGERED" | "LEVEL_TRIGGERED";
}