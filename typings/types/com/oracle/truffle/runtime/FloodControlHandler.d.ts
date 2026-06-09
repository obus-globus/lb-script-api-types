import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { OptimizedRuntimeServiceProvider } from '../../../../com/oracle/truffle/runtime/OptimizedRuntimeServiceProvider.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
export interface FloodControlHandler extends OptimizedRuntimeServiceProvider, Object {
    getEngineOptions(): OptionDescriptor[];
    getPriority(): number;
    isSuppressedFailure(compilable: TruffleCompilable, serializedException: () => string): boolean;
}