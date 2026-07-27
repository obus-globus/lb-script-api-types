import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class ModelManager extends ValueGroup implements EventListener {
    static INSTANCE: ModelManager;
    // private /*not mapped: */ getAllCombatModels(): string[];
    // private /*not mapped: */ getAvailableCombatModels(): string[];
    /**
     * Base models that are always available
     * and are included in the LiquidBounce JAR.
     *
     * The name can contain uppercase characters,
     * but the file should always be lowercase.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:42}
     */
    readonly combatModels: string[];
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private logger: Logger;
    readonly models: ModeValueGroup<TwoDimensionalRegressionModel>;
    readonly running: boolean;
    children(): EventListener[];
    /**
     * Load models from the models folder. This only has to be triggered
     * when reloading the models. Otherwise, the models are loaded on startup
     * through the choice initialization.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:71}
     */
    load(): void;
    parent(): EventListener | null;
    /**
     * Clear out all models and load-in the models again.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:105}
     */
    reload(): void;
    /**
     * Unload all models.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:97}
     */
    unload(): void;
    unregister(): void;
}