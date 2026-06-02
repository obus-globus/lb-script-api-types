import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class StateTrackable$State extends Enum<StateTrackable$State> {
    static DYNAMIC: StateTrackable$State;
    static IMMUTABLE: StateTrackable$State;
    static STABLE: StateTrackable$State;
    static UNTRACKABLE: StateTrackable$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StateTrackable$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "IMMUTABLE" | "STABLE" | "DYNAMIC" | "UNTRACKABLE";
}