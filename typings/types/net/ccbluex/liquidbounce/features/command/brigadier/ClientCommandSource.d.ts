import type { CharMatcher } from '../../../../../../com/google/common/base/CharMatcher.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { SharedSuggestionProvider } from '../../../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { SharedSuggestionProvider$ElementSuggestionType } from '../../../../../../net/minecraft/commands/SharedSuggestionProvider$ElementSuggestionType.d.ts'
import type { SharedSuggestionProvider$TextCoordinates } from '../../../../../../net/minecraft/commands/SharedSuggestionProvider$TextCoordinates.d.ts'
import type { HolderLookup } from '../../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PermissionSet } from '../../../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
/**
 * Lightweight command source for LiquidBounce client commands, mirroring the role of
 * Minecraft's `CommandSourceStack` on the server side.
 *
 * The client only executes commands in the local game context, so the source is a
 * singleton that exposes the current game state. `requires` predicates and handlers can
 * use {@link playerOrNull}/{@link levelOrNull}/{@link isIngame} to gate execution, while the inherited
 * {@link MinecraftShortcuts} properties stay non-null for use after the ingame check passed.
 *
 * Implements vanilla {@link SharedSuggestionProvider} (like the client's own
 * `ClientSuggestionProvider`) so argument types such as `Vec3ArgumentType`,
 * `ResourceArgument` and `ItemArgument` resolve their suggestions through the source,
 * instead of each provider hardcoding its candidates. Every delegate falls back to an
 * empty/static value when no server connection exists (main menu, unit tests).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:58}
 */
export class ClientCommandSource extends Object implements SharedSuggestionProvider {
    static INSTANCE: ClientCommandSource;
    static MATCH_SPLITTER: CharMatcher;
    /*not mapped: */ isIngame(): boolean;
    readonly levelOrNull: ClientLevel | null;
    readonly playerOrNull: LocalPlayer | null;
    /**
     * Registry access shared by command argument factories ({@link net.ccbluex.liquidbounce.features.command.arguments.itemArgument},
     * {@link net.ccbluex.liquidbounce.features.command.arguments.resourceArgument}):
     * the joined world's registries when available, otherwise the
     * static vanilla lookup so parse/suggestions keep working outside a world.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:75}
     */
    commandBuildContext(): HolderLookup$Provider;
    /**
     * Server-driven custom tab completions require a request/response round-trip with a
     * pending-suggestions id owned by the vanilla `ClientSuggestionProvider`; our client
     * commands never reach the server, so there is nothing to query - empty by design.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:111}
     */
    customSuggestion(context: CommandContext<Object>): CompletableFuture<Suggestions>;
    /**
     * Feature flags announced by the current server connection; the vanilla defaults
     * when no server is joined (main menu, unit tests).
     *
     * The `mc.connection` access is wrapped for the same reason as {@link commandBuildContext}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:85}
     */
    enabledFeatures(): FeatureFlagSet;
    getAbsoluteCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getAllTeams(): string[];
    getAvailableSounds(): Stream<Identifier>;
    getCustomTabSuggestions(): string[];
    getOnlinePlayerNames(): string[];
    getRelevantCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getSelectedEntities(): string[];
    levels(): ResourceKey<Level>[];
    permissions(): PermissionSet;
    /**
     * Synced world registries when a level is loaded; otherwise the static builtin
     * {@link RegistryAccess} (not {@link VanillaRegistries.createLookup}, which is only a
     * {@link HolderLookup.Provider} and is not a {@link RegistryAccess}).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:122}
     */
    registryAccess(): RegistryAccess;
    /**
     * Registry element suggestions for argument types such as `ResourceArgument`.
     *
     * Replicated from vanilla `ClientSuggestionProvider.suggestRegistryElements`, which
     * serves the request from the registries synced with the current server connection;
     * we resolve the same key against {@link registryAccess} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt#L133 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.kt:133}
     */
    suggestRegistryElements(registry: HolderLookup<Object>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder): void;
    suggestRegistryElements(key: ResourceKey<(Object | null)[]>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder, context: CommandContext<Object>): CompletableFuture<Suggestions>;
}