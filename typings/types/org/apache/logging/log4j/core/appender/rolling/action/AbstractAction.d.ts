import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Action } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export abstract class AbstractAction extends Object implements Action {
    constructor()
    readonly complete: boolean;
    readonly interrupted: boolean;
    close(): void;
    execute(): boolean;
    isComplete(): boolean;
    isInterrupted(): boolean;
    reportException(ex: Exception): void;
    run(): void;
}