import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionListenerDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionListenerDispatch.d.ts'
import type { ExecutionListener$Builder } from '../../../../org/graalvm/polyglot/management/ExecutionListener$Builder.d.ts'
export class ExecutionListener extends Object implements AutoCloseable {
    static newBuilder(): ExecutionListener$Builder;
    private constructor()
    constructor(dispatch: AbstractPolyglotImpl$AbstractExecutionListenerDispatch, receiver: Object, creatorEngine: Engine)
    // private creatorEngine: Engine;
    // private dispatch: AbstractPolyglotImpl$AbstractExecutionListenerDispatch;
    // private receiver: Object;
    close(): void;
}