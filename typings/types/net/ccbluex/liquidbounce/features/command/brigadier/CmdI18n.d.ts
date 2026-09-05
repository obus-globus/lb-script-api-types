import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
/**
 * Shared i18n for {@link CmdLiteralScope} and {@link CmdChainScope}; helpers take this as receiver.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:84}
 */
export interface CmdI18n extends Object{
    readonly path: string;
    /**
     * Resolves {@link key} under the root command's namespace: only the first segment of {@link path}
     * is used, so {@link key} must carry the subcommand path itself (e.g. `"clear.noFriends"`
     * for `.friend clear` -> `liquidbounce.command.friend.clear.noFriends`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:92}
     */
    t(key: string, ...args: (Object | null)[]): MutableComponent;
}