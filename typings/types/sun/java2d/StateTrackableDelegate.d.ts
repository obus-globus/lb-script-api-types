import type { Object } from '../../java/lang/Object.d.ts'
import type { StateTrackable } from '../../sun/java2d/StateTrackable.d.ts'
import type { StateTrackable$State } from '../../sun/java2d/StateTrackable$State.d.ts'
import type { StateTracker } from '../../sun/java2d/StateTracker.d.ts'
export class StateTrackableDelegate extends Object implements StateTrackable {
    static IMMUTABLE_DELEGATE: StateTrackableDelegate;
    static UNTRACKABLE_DELEGATE: StateTrackableDelegate;
    static createInstance(paramarg0: StateTrackable$State): StateTrackableDelegate;
    private constructor(arg0: StateTrackable$State)
    // private numDynamicAgents: number;
    // private theState: StateTrackable$State;
    // private theTracker: StateTracker;
    addDynamicAgent(): void;
    getState(): StateTrackable$State;
    getStateTracker(): StateTracker;
    markDirty(): void;
    removeDynamicAgent(): void;
    setImmutable(): void;
    setUntrackable(): void;
}