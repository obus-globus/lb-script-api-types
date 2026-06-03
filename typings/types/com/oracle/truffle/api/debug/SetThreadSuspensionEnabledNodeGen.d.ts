import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { SetThreadSuspensionEnabledNode } from '../../../../../com/oracle/truffle/api/debug/SetThreadSuspensionEnabledNode.d.ts'
import type { SetThreadSuspensionEnabledNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/debug/SetThreadSuspensionEnabledNodeGen$CachedData.d.ts'
export class SetThreadSuspensionEnabledNodeGen extends SetThreadSuspensionEnabledNode {
    static create(): SetThreadSuspensionEnabledNode;
    private constructor()
    // private cached_cache: SetThreadSuspensionEnabledNodeGen$CachedData;
    // private state_0_: number;
    execute(suspensionEnabled: boolean, sessions: Breakpoint$SessionList): void;
    execute(arg0Value: boolean, arg1Value: Breakpoint$SessionList, arg2Value: number): void;
    // private executeAndSpecialize(arg0Value: boolean, arg1Value: Breakpoint$SessionList, arg2Value: number): void;
}