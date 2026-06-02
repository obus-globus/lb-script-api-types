import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EpollMode extends Enum<EpollMode> {
    static EDGE_TRIGGERED: EpollMode;
    static LEVEL_TRIGGERED: EpollMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EpollMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "EDGE_TRIGGERED" | "LEVEL_TRIGGERED";
}