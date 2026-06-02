import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { OptimizedRuntimeServiceProvider } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeServiceProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
export interface LoopNodeFactory extends OptimizedRuntimeServiceProvider, Object{
    create(repeatingNode: RepeatingNode): LoopNode;
    getEngineOptions(): OptionDescriptor[];
    getPriority(): number;
}