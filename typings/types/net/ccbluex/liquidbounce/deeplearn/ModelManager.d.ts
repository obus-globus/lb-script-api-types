import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:35}
     */
    readonly combatModels: string[];
    // private logger: Logger;
    readonly models: ModeValueGroup<TwoDimensionalRegressionModel>;
    children(): EventListener[];
    /**
     * Load models from the models folder. This only has to be triggered
     * when reloading the models. Otherwise, the models are loaded on startup
     * through the choice initialization.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:66}
     */
    load(): void;
    parent(): EventListener | null;
    /**
     * Clear out all models and load-in the models again.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:102}
     */
    reload(): void;
    /**
     * Unload all models.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/ModelManager.kt:94}
     */
    unload(): void;
    unregister(): void;
}