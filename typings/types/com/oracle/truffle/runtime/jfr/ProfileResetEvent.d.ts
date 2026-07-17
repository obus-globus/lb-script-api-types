import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProfileResetEvent extends RootFunctionEvent, Object{
    isEnabled(): boolean;
    publish(): void;
    setRootFunction(target: OptimizedCallTarget): void;
}