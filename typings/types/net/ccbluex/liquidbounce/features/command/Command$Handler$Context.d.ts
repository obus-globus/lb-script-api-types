import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class Command$Handler$Context extends Object {
    constructor(command: Command, args: Object[])
    args: Object[];
    command: Command;
    readonly logger: Logger;
}