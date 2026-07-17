import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DeoptimizationEvent extends RootFunctionEvent, Object{
    isEnabled(): boolean;
    publish(): void;
    setInvalidated(invalidated: boolean): void;
    setReason(reason: string): void;
    setRootFunction(target: OptimizedCallTarget): void;
}