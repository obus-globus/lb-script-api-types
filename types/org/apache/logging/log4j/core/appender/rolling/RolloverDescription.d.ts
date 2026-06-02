import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export interface RolloverDescription extends Object{
    getActiveFileName(): string;
    getAppend(): boolean;
    getAsynchronous(): Action;
    getSynchronous(): Action;
}