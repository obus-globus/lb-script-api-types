import type { Gson } from '../../../../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Debug Command to collect information about the client
 * in order to help developers to fix bugs or help users
 * with their issues.
 *
 * This command will create a JSON file with all the information
 * and send it to the CCBlueX Paste API.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandDebug.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandDebug.kt:61}
 */
export class CommandDebug extends Object implements Command$Factory {
    static INSTANCE: CommandDebug;
    // private gson: Gson;
    createCommand(): Command;
    // private createDebugJson(autoConfigPaste: string): JsonObject;
    // private uploadToPaste(content: string): string;
}