import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * Origin of a sprint update: INPUT, MOVEMENT_TICK or NETWORK.
 */
export class SprintEvent$Source extends Enum<SprintEvent$Source> {
    static INPUT: SprintEvent$Source;
    static MOVEMENT_TICK: SprintEvent$Source;
    static NETWORK: SprintEvent$Source;
    static getEntries(): SprintEvent$Source[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SprintEvent$Source;
    static values(): SprintEvent$Source[];
    private constructor()
    name(): "INPUT" | "MOVEMENT_TICK" | "NETWORK";
}