import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { Source } from '../../../../org/graalvm/polyglot/Source.d.ts'
import type { ExecutionEvent } from '../../../../org/graalvm/polyglot/management/ExecutionEvent.d.ts'
import type { ExecutionListener } from '../../../../org/graalvm/polyglot/management/ExecutionListener.d.ts'
export class ExecutionListener$Builder extends Object {
    constructor(null_: ExecutionListener$Builder)
    // private collectExceptions: boolean;
    // private collectInputValues: boolean;
    // private collectReturnValues: boolean;
    // private expressions: boolean;
    // private onEnter: (param0: Object | null) => void;
    // private onReturn: (param0: Object | null) => void;
    // private rootNameFilter: (param0: string) => kotlin.Boolean;
    // private roots: boolean;
    // private sourceFilter: (param0: Object | null) => kotlin.Boolean;
    // private statements: boolean;
    attach(engine: Engine): ExecutionListener;
    collectExceptions(enabled: boolean): ExecutionListener$Builder;
    collectInputValues(enabled: boolean): ExecutionListener$Builder;
    collectReturnValue(enabled: boolean): ExecutionListener$Builder;
    expressions(enabled: boolean): ExecutionListener$Builder;
    onEnter(listener: (param0: ExecutionEvent) => void): ExecutionListener$Builder;
    onReturn(listener: (param0: ExecutionEvent) => void): ExecutionListener$Builder;
    rootNameFilter(predicate: (param0: string) => kotlin.Boolean): ExecutionListener$Builder;
    roots(enabled: boolean): ExecutionListener$Builder;
    sourceFilter(predicate: (param0: Source) => kotlin.Boolean): ExecutionListener$Builder;
    statements(enabled: boolean): ExecutionListener$Builder;
}