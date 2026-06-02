import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDeleteStrategy } from '../../../../org/apache/commons/io/FileDeleteStrategy.d.ts'
export class FileCleaningTracker$Tracker extends PhantomReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: string, arg1: FileDeleteStrategy, arg2: Object, arg3: ReferenceQueue<Object>)
    // private deleteStrategy: FileDeleteStrategy;
    readonly path: string;
    delete(): boolean;
    getPath(): string;
}