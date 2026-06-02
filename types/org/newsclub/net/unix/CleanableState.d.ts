import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Cleaner$Cleanable } from '../../../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CleanableState extends Object implements Closeable {
    constructor(arg0: Object)
    // private cleanable: Cleaner$Cleanable;
    close(): void;
    doClean(): void;
    runCleaner(): void;
}