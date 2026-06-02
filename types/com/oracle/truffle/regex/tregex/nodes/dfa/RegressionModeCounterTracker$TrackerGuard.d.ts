import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface RegressionModeCounterTracker$TrackerGuard extends Object{
    apply(tracker: CounterTracker, sId: number, fixedData: number[], intArrays: number[][]): boolean;
}