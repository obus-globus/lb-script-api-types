import type { DynamicCommandExceptionType } from '../../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Typed parse-error factories for the client argument types, mirroring the vanilla
 * pattern of one `DynamicCommandExceptionType` per failure mode (see e.g.
 * `Vec3Argument.ERROR_NOT_COMPLETE`). Unlike vanilla's `Component.literal` messages,
 * the factories produce translatable components so the whole error sentence renders
 * in the user's language.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:31}
 */
export class CommandErrors extends Object {
    /**
     * `%s` = parameter name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:55}
     */
    static EMPTY_MULTI_SELECT: DynamicCommandExceptionType;
    static INSTANCE: CommandErrors;
    /**
     * First `%s` = rejected value, second `%s` = parameter name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:41}
     */
    static INVALID_BOOLEAN: DynamicCommandExceptionType;
    /**
     * First `%s` = rejected value, second `%s` = parameter name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:34}
     */
    static INVALID_CHOICE: DynamicCommandExceptionType;
    /**
     * First `%s` = rejected value, second `%s` = the `max` keyword.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:79}
     */
    static INVALID_ENCHANT_LEVEL: DynamicCommandExceptionType;
    /**
     * First `%s` = rejected value, second `%s` = type name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:48}
     */
    static INVALID_MULTI_SELECT: DynamicCommandExceptionType;
    /**
     * `%s` = rejected friend name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:73}
     */
    static NOT_A_FRIEND: DynamicCommandExceptionType;
    /**
     * `%s` = rejected module name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:61}
     */
    static NO_SUCH_MODULE: DynamicCommandExceptionType;
    /**
     * `%s` = rejected player name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/CommandErrors.kt:67}
     */
    static NO_SUCH_PLAYER: DynamicCommandExceptionType;
    EMPTY_MULTI_SELECT: DynamicCommandExceptionType;
    INVALID_BOOLEAN: DynamicCommandExceptionType;
    INVALID_CHOICE: DynamicCommandExceptionType;
    INVALID_ENCHANT_LEVEL: DynamicCommandExceptionType;
    INVALID_MULTI_SELECT: DynamicCommandExceptionType;
    NOT_A_FRIEND: DynamicCommandExceptionType;
    NO_SUCH_MODULE: DynamicCommandExceptionType;
    NO_SUCH_PLAYER: DynamicCommandExceptionType;
}