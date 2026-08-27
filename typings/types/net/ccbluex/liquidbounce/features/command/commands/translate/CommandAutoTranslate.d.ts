import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
export class CommandAutoTranslate extends ValueGroup implements CommandRegistrar {
    static INSTANCE: CommandAutoTranslate;
    readonly languageCode: string;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}