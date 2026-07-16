import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class StateTrackable$State extends Enum<StateTrackable$State> {
    static DYNAMIC: StateTrackable$State;
    static IMMUTABLE: StateTrackable$State;
    static STABLE: StateTrackable$State;
    static UNTRACKABLE: StateTrackable$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StateTrackable$State;
    static values(): StateTrackable$State[];
    private constructor()
    name(): "IMMUTABLE" | "STABLE" | "DYNAMIC" | "UNTRACKABLE";
}