import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlinkManager$Action extends Enum<BlinkManager$Action> {
    static FLUSH: BlinkManager$Action;
    static PASS: BlinkManager$Action;
    static QUEUE: BlinkManager$Action;
    static getEntries(): BlinkManager$Action[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlinkManager$Action;
    static values(): (Object | null)[];
    private constructor(priority: number)
    readonly priority: number;
    name(): "FLUSH" | "PASS" | "QUEUE";
}