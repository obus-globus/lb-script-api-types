import type { AllocationEvent } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEvent.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { MemoryTracer$AllocationEventInfo } from '../../../../../com/oracle/truffle/tools/profiler/MemoryTracer$AllocationEventInfo.d.ts'
import type { ShadowStack$ThreadLocalStack } from '../../../../../com/oracle/truffle/tools/profiler/ShadowStack$ThreadLocalStack.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MemoryTracer$Listener extends Object implements AllocationListener {
    private constructor(null_: MemoryTracer$Listener)
    // private gettingMetaObject: ThreadLocal<boolean>;
    handleEvent(stack: ShadowStack$ThreadLocalStack, info: MemoryTracer$AllocationEventInfo): boolean;
    onEnter(event: AllocationEvent): void;
    onReturnValue(event: AllocationEvent): void;
}