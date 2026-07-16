import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * Virtual screen action: OPEN or CLOSE.
 */
export class VirtualScreenEvent$Action extends Enum<VirtualScreenEvent$Action> {
    static CLOSE: VirtualScreenEvent$Action;
    static OPEN: VirtualScreenEvent$Action;
    static getEntries(): VirtualScreenEvent$Action[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VirtualScreenEvent$Action;
    static values(): VirtualScreenEvent$Action[];
    private constructor()
    name(): "OPEN" | "CLOSE";
}