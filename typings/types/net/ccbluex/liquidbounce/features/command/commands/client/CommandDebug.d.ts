import type { Gson } from '../../../../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Debug Command to collect information about the client
 * in order to help developers to fix bugs or help users
 * with their issues.
 *
 * This command will create a JSON file with all the information
 * and send it to the CCBlueX Paste API.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandDebug.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandDebug.kt:61}
 */
export class CommandDebug extends Object implements CommandRegistrar {
    static INSTANCE: CommandDebug;
    // private gson: Gson;
    // private createDebugJson(autoConfigPaste: string): JsonObject;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private uploadToPaste(content: string, $completion: Continuation<string>): any;
}