import type { Filter } from '../../../java/util/logging/Filter.d.ts'
import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { Level } from '../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Logger$ConfigurationData extends Object {
    constructor()
    // private delegate: Logger$ConfigurationData;
    // private filter: (param0: LogRecord) => kotlin.Boolean;
    // private handlers: Handler[];
    // private levelObject: Level;
    // private levelValue: number;
    // private useParentHandlers: boolean;
    addHandler(arg0: Handler): void;
    merge(arg0: Logger): Logger$ConfigurationData;
    removeHandler(arg0: Handler): void;
    setFilter(arg0: (param0: LogRecord) => kotlin.Boolean): void;
    setLevelObject(arg0: Level): void;
    setLevelValue(arg0: number): void;
    setUseParentHandlers(arg0: boolean): void;
}