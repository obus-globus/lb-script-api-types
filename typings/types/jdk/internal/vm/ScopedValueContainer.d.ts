import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ScopedValue$CallableOp } from '../../../java/lang/ScopedValue$CallableOp.d.ts'
import type { ScopedValueContainer$BindingsSnapshot } from '../../../jdk/internal/vm/ScopedValueContainer$BindingsSnapshot.d.ts'
import type { StackableScope } from '../../../jdk/internal/vm/StackableScope.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ScopedValueContainer extends StackableScope {
    static call(paramarg0: () => Object | null): Object | null;
    static captureBindings(): ScopedValueContainer$BindingsSnapshot;
    static latest(paramarg0: Class<ScopedValueContainer>): ScopedValueContainer | null;
    static latest(): ScopedValueContainer;
    static popAll(): void;
    static run(paramarg0: () => void): void;
    private constructor()
    // private doCall<V extends Object | number | string | boolean, X extends Throwable>(arg0: () => V): V;
    // private doRun(arg0: () => void): void;
}