import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Formatter extends Object {
    constructor()
    format(arg0: LogRecord): string;
    formatMessage(arg0: LogRecord): string;
    getHead(arg0: Handler): string;
    getTail(arg0: Handler): string;
}