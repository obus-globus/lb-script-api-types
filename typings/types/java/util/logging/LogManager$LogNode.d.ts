import type { JavaMap } from '../../../JavaMap.d.ts'
import type { LogManager$LoggerContext } from '../../../java/util/logging/LogManager$LoggerContext.d.ts'
import type { LogManager$LoggerWeakRef } from '../../../java/util/logging/LogManager$LoggerWeakRef.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LogManager$LogNode extends Object {
    constructor(arg0: LogManager$LogNode, arg1: LogManager$LoggerContext)
    // private children: JavaMap<string, LogManager$LogNode>;
    // private context: LogManager$LoggerContext;
    // private loggerRef: LogManager$LoggerWeakRef;
    // private parent: LogManager$LogNode;
    walkAndSetParent(arg0: Logger): void;
}