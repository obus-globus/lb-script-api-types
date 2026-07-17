import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class LibGraalIsolate$InitializationError extends Record {
    private constructor(cause: Throwable)
    // private cause: Throwable;
    cause(): Throwable;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rethrow(): RuntimeException;
    toString(): string;
}