import type { Cleaner } from '../../../java/lang/ref/Cleaner.d.ts'
import type { Cleaner$Cleanable } from '../../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { PhantomReference } from '../../../java/lang/ref/PhantomReference.d.ts'
import type { CleanerImpl$CleanableList } from '../../../jdk/internal/ref/CleanerImpl$CleanableList.d.ts'
import type { CleanerImpl$CleanableList$Node } from '../../../jdk/internal/ref/CleanerImpl$CleanableList$Node.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PhantomCleanable<T extends Object | number | string | boolean> extends PhantomReference<T> implements Cleaner$Cleanable {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: T, arg1: Cleaner)
    // private index: number;
    // private list: CleanerImpl$CleanableList;
    // private node: CleanerImpl$CleanableList$Node;
    clean(): void;
    clear(): void;
    enqueue(): boolean;
    isEnqueued(): boolean;
    performCleanup(): void;
}