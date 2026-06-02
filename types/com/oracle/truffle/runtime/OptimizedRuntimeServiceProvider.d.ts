import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
export interface OptimizedRuntimeServiceProvider extends Object{
    getEngineOptions(): OptionDescriptor[];
    getPriority(): number;
}