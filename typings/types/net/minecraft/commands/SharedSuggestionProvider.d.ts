import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SharedSuggestionProvider$ElementSuggestionType } from '../../../net/minecraft/commands/SharedSuggestionProvider$ElementSuggestionType.d.ts'
import type { SharedSuggestionProvider$TextCoordinates } from '../../../net/minecraft/commands/SharedSuggestionProvider$TextCoordinates.d.ts'
import type { HolderLookup } from '../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PermissionSetSupplier } from '../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
export interface SharedSuggestionProvider extends Object, PermissionSetSupplier{
    customSuggestion(context: CommandContext<Object>): CompletableFuture<Suggestions>;
    enabledFeatures(): FeatureFlagSet;
    getAbsoluteCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getAllTeams(): string[];
    getAvailableSounds(): Stream<Identifier>;
    getCustomTabSuggestions(): string[];
    getOnlinePlayerNames(): string[];
    getRelevantCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getSelectedEntities(): string[];
    levels(): ResourceKey<Level>[];
    registryAccess(): RegistryAccess;
    suggestRegistryElements(registry: HolderLookup<Object>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder): void;
    suggestRegistryElements(key: ResourceKey<(Object | null)[]>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder, context: CommandContext<Object>): CompletableFuture<Suggestions>;
}