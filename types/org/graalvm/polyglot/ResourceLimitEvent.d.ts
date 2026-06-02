import type { Object } from '../../../java/lang/Object.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
export class ResourceLimitEvent extends Object {
    constructor(context: Context)
    readonly context: Context;
    getContext(): Context;
    toString(): string;
}