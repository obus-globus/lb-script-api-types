import type { Object } from '../../../java/lang/Object.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine$CleanableReference } from '../../../org/graalvm/polyglot/Engine$CleanableReference.d.ts'
import type { AbstractPolyglotImpl$AbstractContextDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractContextDispatch.d.ts'
export class Engine$ContextReference extends Engine$CleanableReference<Context> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(context: Context, dispatch: AbstractPolyglotImpl$AbstractContextDispatch, receiver: Object)
    // private dispatch: AbstractPolyglotImpl$AbstractContextDispatch;
    // private receiver: Object;
    clean(): void;
}