import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TrackedWaypoint$PitchDirection extends Enum<TrackedWaypoint$PitchDirection> {
    static DOWN: TrackedWaypoint$PitchDirection;
    static NONE: TrackedWaypoint$PitchDirection;
    static UP: TrackedWaypoint$PitchDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TrackedWaypoint$PitchDirection;
    static values(): TrackedWaypoint$PitchDirection[];
    private constructor()
    name(): "NONE" | "UP" | "DOWN";
}