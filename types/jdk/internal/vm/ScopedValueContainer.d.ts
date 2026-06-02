import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ScopedValue$CallableOp } from '../../../java/lang/ScopedValue$CallableOp.d.ts'
import type { ScopedValueContainer$BindingsSnapshot } from '../../../jdk/internal/vm/ScopedValueContainer$BindingsSnapshot.d.ts'
import type { StackableScope } from '../../../jdk/internal/vm/StackableScope.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ScopedValueContainer extends StackableScope {
    static call(paramarg0: () => Object | null): Object | null;
    static captureBindings(): ScopedValueContainer$BindingsSnapshot;
    static latest(paramarg0: Class<Object>): Object | null;
    static latest(): ScopedValueContainer;
    static popAll(): void;
    static run(paramarg0: () => void): void;
    private constructor()
    // private doCall<V extends Object | number | string | boolean>(arg0: () => X): V;
    // private doRun(arg0: () => void): void;
}