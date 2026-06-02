import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cancellable } from '../../../../../../org/apache/logging/log4j/core/util/Cancellable.d.ts'
export class DefaultShutdownCallbackRegistry$RegisteredCancellable extends Object implements Cancellable {
    constructor(callback: () => void, registered: E[])
    // private callback: () => void;
    // private registered: E[];
    cancel(): void;
    run(): void;
    toString(): string;
}