import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DebuggerNode$InputValuesProvider extends Object{
    getDebugInputValues(frame: MaterializedFrame): Object[];
}