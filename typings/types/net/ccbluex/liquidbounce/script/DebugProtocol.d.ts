import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class DebugProtocol extends Enum<DebugProtocol> implements Tagged {
    static Companion: Tagged$Companion;
    static DAP: DebugProtocol;
    static INSPECT: DebugProtocol;
    static getEntries(): DebugProtocol[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DebugProtocol;
    static values(): DebugProtocol[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DAP" | "INSPECT";
}