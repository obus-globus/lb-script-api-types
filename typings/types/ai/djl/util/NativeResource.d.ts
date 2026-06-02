import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class NativeResource<T extends Object | number | string | boolean> extends Object implements AutoCloseable {
    constructor(arg0: T)
    // private exception: Exception;
    readonly handle: AtomicReference<T>;
    readonly uid: string;
    close(): void;
    getHandle(): T;
    getUid(): string;
    isReleased(): boolean;
    onClose(): void;
}