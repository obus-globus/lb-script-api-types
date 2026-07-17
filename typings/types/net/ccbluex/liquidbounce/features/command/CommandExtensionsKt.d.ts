import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
export class CommandExtensionsKt extends Object {
    static putCommand(self: JavaMap<string, Command>, command: Command): void;
}