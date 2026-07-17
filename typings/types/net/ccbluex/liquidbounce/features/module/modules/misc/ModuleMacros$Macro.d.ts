import type { InputConstants$Key } from '../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RefreshableIntState } from '../../../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableIntState.d.ts'
export class ModuleMacros$Macro extends ValueGroup {
    protected constructor(name: string)
    lastTriggerTime: number;
    readonly trigger: InputConstants$Key;
    readonly triggerDelayMs: RefreshableIntState;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute($completion: Continuation<void>): any;
}