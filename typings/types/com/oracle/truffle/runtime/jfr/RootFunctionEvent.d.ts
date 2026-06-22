import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { Event } from '../../../../../com/oracle/truffle/runtime/jfr/Event.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RootFunctionEvent extends Event, Object{
    isEnabled(): boolean;
    publish(): void;
    setRootFunction(target: OptimizedCallTarget): void;
}