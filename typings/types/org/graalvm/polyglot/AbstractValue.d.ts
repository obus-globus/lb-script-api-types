import type { Object } from '../../../java/lang/Object.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
export abstract class AbstractValue extends Object {
    constructor(dispatch: AbstractPolyglotImpl$AbstractValueDispatch, context: Object, receiver: Object, creatorContext: Context)
    // private context: Object;
    // private creatorContext: Context;
    // private dispatch: AbstractPolyglotImpl$AbstractValueDispatch;
    // private receiver: Object;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}