import type { Object } from '../../../java/lang/Object.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { Engine$CleanableReference } from '../../../org/graalvm/polyglot/Engine$CleanableReference.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
export class Engine$EngineReference extends Engine$CleanableReference<Engine> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(engine: Engine, dispatch: AbstractPolyglotImpl$AbstractEngineDispatch, receiver: Object)
    // private dispatch: AbstractPolyglotImpl$AbstractEngineDispatch;
    // private receiver: Object;
    clean(): void;
}