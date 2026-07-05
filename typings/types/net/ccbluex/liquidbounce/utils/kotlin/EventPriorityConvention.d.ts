import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventPriorityConvention extends Object {
    /**
     * Priority for critical modifications that need to happen early in the event chain,
     * after input preparation but before model state processing
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:53}
     */
    static CRITICAL_MODIFICATION: number;
    /**
     * Used when the event handler should be able to object anything that happened previously
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:74}
     */
    static FINAL_DECISION: number;
    /**
     * The event should be called first.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:47}
     */
    static FIRST_PRIORITY: number;
    static INSTANCE: EventPriorityConvention;
    /**
     * At the stage of modeling what the player is actually going to do after other events added their suggestions
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:58}
     */
    static MODEL_STATE: number;
    /**
     * Used when the event handler should be able to object anything that happened previously
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:69}
     */
    static OBJECTION_AGAINST_EVERYTHING: number;
    /**
     * The event should be called last. It should not only be used for events that want to read the final state of the
     * event
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:80}
     */
    static READ_FINAL_STATE: number;
    /**
     * Should be the one of the last functionalities that run, because the player safety depends on it.
     * Can be objected though by handlers with {@link OBJECTION_AGAINST_EVERYTHING} priority
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/Priority.kt:64}
     */
    static SAFETY_FEATURE: number;
    CRITICAL_MODIFICATION: number;
    FINAL_DECISION: number;
    FIRST_PRIORITY: number;
    MODEL_STATE: number;
    OBJECTION_AGAINST_EVERYTHING: number;
    READ_FINAL_STATE: number;
    SAFETY_FEATURE: number;
}