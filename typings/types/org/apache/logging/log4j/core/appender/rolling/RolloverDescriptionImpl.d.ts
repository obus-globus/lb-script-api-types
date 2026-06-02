import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RolloverDescription } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverDescription.d.ts'
import type { Action } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Action.d.ts'
export class RolloverDescriptionImpl extends Object implements RolloverDescription {
    constructor(activeFileName: string, append: boolean, synchronous: Action, asynchronous: Action)
    readonly activeFileName: string;
    readonly append: boolean;
    readonly asynchronous: Action;
    readonly synchronous: Action;
    getActiveFileName(): string;
    getAppend(): boolean;
    getAsynchronous(): Action;
    getSynchronous(): Action;
}