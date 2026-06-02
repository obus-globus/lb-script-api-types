import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { ShadowStack } from '../../../../../com/oracle/truffle/tools/profiler/ShadowStack.d.ts'
import type { ShadowStack$ThreadLocalStack } from '../../../../../com/oracle/truffle/tools/profiler/ShadowStack$ThreadLocalStack.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ShadowStack$StackPushPopNode extends ExecutionEventNode {
    constructor(profilerStack: ShadowStack, instrumenter: Instrumenter, context: EventContext, ignoreInlinedRoots: boolean)
    // private cachedStack: ShadowStack$ThreadLocalStack;
    // private cachedThread: Thread;
    // private compilationRootLocation: StackTraceEntry;
    // private compiledLocation: StackTraceEntry;
    // private ignoreInlinedRoots: boolean;
    // private interpretedLocation: StackTraceEntry;
    // private isAttachedToRootTag: boolean;
    // private profilerStack: ShadowStack;
    // private seenOtherThreads: boolean;
    // private doOnEnter(): void;
    // private getStack(): ShadowStack$ThreadLocalStack;
    onEnter(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
    // private popSlow(entry: StackTraceEntry): void;
    // private pushSlow(location: StackTraceEntry): void;
}