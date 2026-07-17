import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebuggerSession$AddStrategyUpdater extends Object implements BiFunction<Thread, SteppingStrategy, SteppingStrategy> {
    constructor(newStrategy: SteppingStrategy)
    // private initializeNewStrategy: boolean;
    // private newStrategy: SteppingStrategy;
    andThen<V extends unknown>(arg0: (param0: SteppingStrategy) => V): (param0: Thread, param1: SteppingStrategy) => V;
    apply(t: Thread, existingStrategy: SteppingStrategy): SteppingStrategy;
    // private mergeStrategies(existingStrategy: SteppingStrategy): SteppingStrategy;
}