import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface InvalidationEvent extends RootFunctionEvent, Object{
    isEnabled(): boolean;
    publish(): void;
    setReason(invalidationReason: CharSequence): void;
    setRootFunction(target: OptimizedCallTarget): void;
}