import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { ThreadGroup } from '../../../java/lang/ThreadGroup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackThreadInitializer extends Object {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: boolean)
    constructor(arg0: boolean, arg1: boolean, arg2: string)
    constructor(arg0: boolean, arg1: boolean, arg2: string, arg3: ThreadGroup)
    // private daemon: boolean;
    // private detach: boolean;
    // private group: ThreadGroup;
    // private name: string;
    detach(arg0: Callback): boolean;
    getName(arg0: Callback): string;
    getThreadGroup(arg0: Callback): ThreadGroup;
    isDaemon(arg0: Callback): boolean;
}