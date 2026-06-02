import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotException } from '../../../../org/graalvm/polyglot/PolyglotException.d.ts'
import type { SourceSection } from '../../../../org/graalvm/polyglot/SourceSection.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionEventDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionEventDispatch.d.ts'
export class ExecutionEvent extends Object {
    constructor(dispatch: AbstractPolyglotImpl$AbstractExecutionEventDispatch, receiver: Object)
    // private dispatch: AbstractPolyglotImpl$AbstractExecutionEventDispatch;
    // private receiver: Object;
    getException(): PolyglotException;
    getInputValues(): Value[];
    getLocation(): SourceSection;
    getReturnValue(): Value;
    getRootName(): string;
    isExpression(): boolean;
    isRoot(): boolean;
    isStatement(): boolean;
    toString(): string;
}