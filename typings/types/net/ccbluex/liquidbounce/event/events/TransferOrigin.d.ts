import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Packet transfer direction: INCOMING (received) or OUTGOING (sent).
 */
export class TransferOrigin extends Enum<TransferOrigin> implements Tagged {
    static Companion: Tagged$Companion;
    static INCOMING: TransferOrigin;
    static OUTGOING: TransferOrigin;
    static getEntries(): TransferOrigin[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TransferOrigin;
    static values(): TransferOrigin[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "INCOMING" | "OUTGOING";
}