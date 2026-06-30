import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HarvestAction extends Enum<HarvestAction> {
    static BREAK: HarvestAction;
    static USE: HarvestAction;
    static getEntries(): HarvestAction[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HarvestAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "BREAK" | "USE";
}