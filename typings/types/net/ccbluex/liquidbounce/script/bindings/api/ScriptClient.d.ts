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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt:39}
 */
export class ScriptClient extends Object {
    static INSTANCE: ScriptClient;
    /**
     * The client's combat manager.
     */
    readonly combatManager: CombatManager;
    /**
     * The client's command manager.
     */
    readonly commandManager: CommandManager;
    /**
     * The client's configuration system.
     */
    readonly configSystem: ConfigSystem;
    /**
     * The client's event manager.
     */
    readonly eventManager: EventManager;
    /**
     * The client's module manager.
     */
    readonly moduleManager: ModuleManager;
    /**
     * The client's script manager.
     */
    readonly scriptManager: ScriptManager;
    /**
     * Shows {@link message} in the client-chat
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptClient.kt:52}
     */
    displayChatMessage(message: string): void;
}