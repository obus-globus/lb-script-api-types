import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LazyLogger extends Object {
    constructor(ownerOfLogger: Class<Object>)
    // private lock: Object;
    // private logger: Logger;
    // private loggerName: string;
    get(): Logger;
}