import type { Object } from '../../java/lang/Object.d.ts'
import type { StateTrackable$State } from '../../sun/java2d/StateTrackable$State.d.ts'
import type { StateTracker } from '../../sun/java2d/StateTracker.d.ts'
export interface StateTrackable extends Object{
    getState(): StateTrackable$State;
    getStateTracker(): StateTracker;
}