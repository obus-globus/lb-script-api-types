import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * Origin of a sprint update: INPUT, MOVEMENT_TICK or NETWORK.
 */
export class SprintEvent$Source extends Enum<SprintEvent$Source> {
    static INPUT: SprintEvent$Source;
    static MOVEMENT_TICK: SprintEvent$Source;
    static NETWORK: SprintEvent$Source;
    static getEntries(): SprintEvent$Source[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SprintEvent$Source;
    static values(): (Object | null)[];
    private constructor()
    name(): "INPUT" | "MOVEMENT_TICK" | "NETWORK";
}