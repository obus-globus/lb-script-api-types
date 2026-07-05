import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Binds Command
 *
 * Allows you to manage the bindings of modules to keys.
 * It provides subcommands to add, remove, list and clear bindings.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBinds.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBinds.kt:61}
 */
export class CommandBinds extends Object implements Command$Factory {
    static INSTANCE: CommandBinds;
    // private addSubcommand: Command;
    // private clearSubcommand: Command;
    // private listSubcommand: Command;
    // private removeSubcommand: Command;
    createCommand(): Command;
    // private handleRemoveBind(modules: ClientModule[]): void;
}