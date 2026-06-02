import type { Class } from '../../java/lang/Class.d.ts'
import type { StackWalker$ExtendedOption } from '../../java/lang/StackWalker$ExtendedOption.d.ts'
import type { StackWalker$Option } from '../../java/lang/StackWalker$Option.d.ts'
import type { StackWalker$StackFrame } from '../../java/lang/StackWalker$StackFrame.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Continuation } from '../../jdk/internal/vm/Continuation.d.ts'
import type { ContinuationScope } from '../../jdk/internal/vm/ContinuationScope.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class StackWalker extends Object {
    static getInstance(): StackWalker;
    static getInstance(paramarg0: StackWalker$Option): StackWalker;
    static getInstance(paramarg0: StackWalker$Option[]): StackWalker;
    static getInstance(paramarg0: StackWalker$Option[], paramarg1: number): StackWalker;
    private constructor(arg0: StackWalker$Option[])
    private constructor(arg0: StackWalker$Option[], arg1: number)
    private constructor(arg0: StackWalker$Option[], arg1: number, arg2: StackWalker$ExtendedOption, arg3: ContinuationScope, arg4: Continuation)
    // private contScope: ContinuationScope;
    // private continuation: Continuation;
    // private estimateDepth: number;
    // private extendedOption: StackWalker$ExtendedOption;
    // private options: StackWalker$Option[];
    // private retainClassRef: boolean;
    estimateDepth(): number;
    forEach(arg0: (param0: StackWalker$StackFrame) => void): void;
    getCallerClass(): Class<Object>;
    getContScope(): ContinuationScope;
    getContinuation(): Continuation;
    hasLocalsOperandsOption(): boolean;
    hasOption(arg0: StackWalker$Option): boolean;
    walk<T extends Object | number | string | boolean>(arg0: (param0: Stream<StackWalker$StackFrame>) => T): T;
}