import type { ObjectStreamClass } from '../../java/io/ObjectStreamClass.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SerialCallbackContext extends Object {
    constructor(arg0: Object, arg1: ObjectStreamClass)
    // private desc: ObjectStreamClass;
    // private obj: Object;
    // private thread: Thread;
    check(): void;
    checkAndSetUsed(): void;
    getDesc(): ObjectStreamClass;
    getObj(): Object;
    setUsed(): void;
}