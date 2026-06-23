import type { Reference } from '../../../java/lang/ref/Reference.d.ts'
import type { ReferenceQueue$Lock } from '../../../java/lang/ref/ReferenceQueue$Lock.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ReferenceQueue<T extends unknown> extends Object {
    constructor()
    // private head: Reference<T>;
    // private lock: ReferenceQueue$Lock;
    // private queueLength: number;
    enqueue(arg0: Reference<T>): boolean;
    // private enqueue0(arg0: Reference<T>): boolean;
    forEach(arg0: (param0: Reference<T>) => void): void;
    poll(): Reference<T>;
    // private poll0(): Reference<T>;
    remove(): Reference<T>;
    remove(arg0: number): Reference<T>;
    // private remove0(): Reference<T>;
    // private remove0(arg0: number): Reference<T>;
}