import type { Object } from '../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export class NonDisposableHandle extends Object implements DisposableHandle {
    static INSTANCE: NonDisposableHandle;
    dispose(): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}