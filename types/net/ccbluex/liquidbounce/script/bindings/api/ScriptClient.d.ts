import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigSystem } from '../../../../../../net/ccbluex/liquidbounce/config/ConfigSystem.d.ts'
import type { EventManager } from '../../../../../../net/ccbluex/liquidbounce/event/EventManager.d.ts'
import type { CommandManager } from '../../../../../../net/ccbluex/liquidbounce/features/command/CommandManager.d.ts'
import type { ModuleManager } from '../../../../../../net/ccbluex/liquidbounce/features/module/ModuleManager.d.ts'
import type { ScriptManager } from '../../../../../../net/ccbluex/liquidbounce/script/ScriptManager.d.ts'
import type { CombatManager } from '../../../../../../net/ccbluex/liquidbounce/utils/combat/CombatManager.d.ts'
/**
 * The main hub of the ScriptAPI client that provides access to a useful set of members.
 *
 * Access variables using `client` in the script
 * client.getEventManager()...
 * client.getConfigSystem()...
 * client.getModuleManager()...
 *
 * @since 1.0
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt:29}
 */
export class ScriptClient extends Object {
    static INSTANCE: ScriptClient;
    readonly combatManager: CombatManager;
    readonly commandManager: CommandManager;
    readonly configSystem: ConfigSystem;
    readonly eventManager: EventManager;
    readonly moduleManager: ModuleManager;
    readonly scriptManager: ScriptManager;
    /**
     * Shows {@link message} in the client-chat
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt:49}
     */
    displayChatMessage(message: string): void;
}