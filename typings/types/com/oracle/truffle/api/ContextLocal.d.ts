import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ContextLocal<T extends unknown> extends Object {
    constructor(polyglotObject: Object)
    get(): T;
    get(context: TruffleContext): T;
}