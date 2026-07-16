import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HarvestAction extends Enum<HarvestAction> {
    static BREAK: HarvestAction;
    static USE: HarvestAction;
    static getEntries(): HarvestAction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HarvestAction;
    static values(): HarvestAction[];
    private constructor()
    name(): "BREAK" | "USE";
}