import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ContextThreadLocal<T extends unknown> extends Object {
    constructor(polyglotObject: Object)
    get(): T;
    get(t: TruffleContext): T;
    get(context: TruffleContext, t: Thread): T;
    get(t: Thread): T;
}