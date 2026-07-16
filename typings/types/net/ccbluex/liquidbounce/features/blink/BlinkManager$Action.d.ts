import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BlinkManager$Action extends Enum<BlinkManager$Action> {
    static FLUSH: BlinkManager$Action;
    static PASS: BlinkManager$Action;
    static QUEUE: BlinkManager$Action;
    static getEntries(): BlinkManager$Action[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): BlinkManager$Action;
    static values(): BlinkManager$Action[];
    private constructor(priority: number)
    readonly priority: number;
    name(): "FLUSH" | "PASS" | "QUEUE";
}