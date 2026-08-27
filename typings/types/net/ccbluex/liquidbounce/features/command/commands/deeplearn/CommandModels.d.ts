import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mutex } from '../../../../../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
export class CommandModels extends Object implements CommandRegistrar {
    static INSTANCE: CommandModels;
    // private mutationMutex: Mutex;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}