import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class ConsoleInput extends Object {
    constructor(msg: string, source: CommandSourceStack)
    msg: string;
    source: CommandSourceStack;
}