import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ScopedValue$CallableOp } from '../../../java/lang/ScopedValue$CallableOp.d.ts'
import type { ScopedValueContainer$BindingsSnapshot } from '../../../jdk/internal/vm/ScopedValueContainer$BindingsSnapshot.d.ts'
import type { StackableScope } from '../../../jdk/internal/vm/StackableScope.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ScopedValueContainer extends StackableScope {
    static call<V extends unknown, X extends Throwable>(paramarg0: () => V): V;
    static captureBindings(): ScopedValueContainer$BindingsSnapshot;
    static latest<T extends ScopedValueContainer>(paramarg0: Class<T>): T;
    static latest(): ScopedValueContainer;
    static popAll(): void;
    static run(paramarg0: () => void): void;
    private constructor()
    // private doCall<V extends unknown, X extends Throwable>(arg0: () => V): V;
    // private doRun(arg0: () => void): void;
}