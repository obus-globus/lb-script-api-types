import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TrackedWaypoint$PitchDirection extends Enum<TrackedWaypoint$PitchDirection> {
    static DOWN: TrackedWaypoint$PitchDirection;
    static NONE: TrackedWaypoint$PitchDirection;
    static UP: TrackedWaypoint$PitchDirection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TrackedWaypoint$PitchDirection;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "UP" | "DOWN";
}