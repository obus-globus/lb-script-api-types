import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Typed handle passed into an `argument` or `optional` continuation.
 *
 * The handle carries everything needed to attach and read one argument: its Brigadier
 * {@link type}, its name and the fallback for omitted optional branches. Handlers retrieve the
 * parsed value through {@link get} without repeating name or type at the call site.
 *
 * @param T the resolved value type; nullable for optional arguments whose default is `null`
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:42}
 */
export class CmdArg<T extends unknown> extends Object {
    constructor(name: string, type: ArgumentType<T>, default_: Object | null)
    // private default: Object | null;
    // private name: string;
    /*not mapped: */ getName$net_ccbluex_liquidbounce(): string;
    // private type: ArgumentType<T>;
    /*not mapped: */ getType$net_ccbluex_liquidbounce(): ArgumentType<T>;
    /**
     * Reads this argument's parsed value from {@link ctx}, falling back to {@link default} when the
     * argument was omitted on an optional branch of the tree.
     *
     * The lookup passes {@link Any} as the raw class so Brigadier skips its assignability check
     * (which compares against the ArgumentType implementation class, not the value class)
     * and returns the parsed value verbatim; the cast to {@link T} is safe because the handle
     * is created next to its matching {@link ArgumentType}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:56}
     */
    resolve(ctx: CommandContext<ClientCommandSource>): T;
}