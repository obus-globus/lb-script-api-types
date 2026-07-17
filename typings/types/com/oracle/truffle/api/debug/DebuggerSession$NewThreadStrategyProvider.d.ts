import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebuggerSession$NewThreadStrategyProvider extends Object implements Function<Thread, SteppingStrategy> {
    static identity<T extends unknown>(): (param0: T) => T;
    private constructor(null_: DebuggerSession)
    andThen<V extends unknown>(arg0: (param0: SteppingStrategy) => V): (param0: Thread) => V;
    apply(t: Thread): SteppingStrategy;
    compose<V extends unknown>(arg0: (param0: V) => Thread): (param0: V) => SteppingStrategy;
}