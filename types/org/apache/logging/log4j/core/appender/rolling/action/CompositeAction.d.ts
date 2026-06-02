import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
import type { Action } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export class CompositeAction extends AbstractAction {
    constructor(actions: Action[], stopOnError: boolean)
    readonly actions: Action[];
    readonly stopOnError: boolean;
    execute(): boolean;
    getActions(): Action[];
    isStopOnError(): boolean;
    run(): void;
    toString(): string;
}