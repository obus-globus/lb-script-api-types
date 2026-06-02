import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TrajectoryType$InitialTickBehavior extends Enum<TrajectoryType$InitialTickBehavior> {
    static APPLY_VELOCITY_ONLY_BEFORE_FIRST_MOVE: TrajectoryType$InitialTickBehavior;
    static NONE: TrajectoryType$InitialTickBehavior;
    static getEntries(): TrajectoryType$InitialTickBehavior[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrajectoryType$InitialTickBehavior;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "APPLY_VELOCITY_ONLY_BEFORE_FIRST_MOVE";
}