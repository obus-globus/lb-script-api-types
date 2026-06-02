import type { RollingFileManager } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RollingFileManager.d.ts'
import type { AbstractAction } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export class RollingFileManager$AsyncAction extends AbstractAction {
    constructor(act: Action, manager: RollingFileManager)
    // private action: Action;
    // private manager: RollingFileManager;
    close(): void;
    execute(): boolean;
    isComplete(): boolean;
    toString(): string;
}