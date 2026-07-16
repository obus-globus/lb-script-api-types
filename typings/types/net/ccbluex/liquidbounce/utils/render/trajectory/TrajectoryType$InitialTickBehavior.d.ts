import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TrajectoryType$InitialTickBehavior extends Enum<TrajectoryType$InitialTickBehavior> {
    static APPLY_VELOCITY_ONLY_BEFORE_FIRST_MOVE: TrajectoryType$InitialTickBehavior;
    static NONE: TrajectoryType$InitialTickBehavior;
    static getEntries(): TrajectoryType$InitialTickBehavior[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TrajectoryType$InitialTickBehavior;
    static values(): TrajectoryType$InitialTickBehavior[];
    private constructor()
    name(): "NONE" | "APPLY_VELOCITY_ONLY_BEFORE_FIRST_MOVE";
}