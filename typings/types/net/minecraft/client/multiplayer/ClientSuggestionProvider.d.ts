import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricClientCommandSource } from '../../../../net/fabricmc/fabric/api/client/command/v2/FabricClientCommandSource.d.ts'
import type { ClientSuggestionProviderExtensions } from '../../../../net/fabricmc/fabric/impl/command/client/ClientSuggestionProviderExtensions.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { SharedSuggestionProvider } from '../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { SharedSuggestionProvider$ElementSuggestionType } from '../../../../net/minecraft/commands/SharedSuggestionProvider$ElementSuggestionType.d.ts'
import type { SharedSuggestionProvider$TextCoordinates } from '../../../../net/minecraft/commands/SharedSuggestionProvider$TextCoordinates.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundCustomChatCompletionsPacket$Action } from '../../../../net/minecraft/network/protocol/game/ClientboundCustomChatCompletionsPacket$Action.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientSuggestionProvider extends Object implements FabricClientCommandSource, ClientSuggestionProviderExtensions, SharedSuggestionProvider {
    static MATCH_SPLITTER: CharMatcher;
    static filterResources<T extends unknown>(paramvalues: T[], paramcontents: string, paramprefix: string, paramconverter: (param0: T) => Identifier, paramconsumer: (param0: T) => void): void;
    static filterResources<T extends unknown>(paramvalues: T[], paramcontents: string, paramconverter: (param0: T) => Identifier, paramconsumer: (param0: T) => void): void;
    static listSuggestions<S extends unknown>(paramcontext: CommandContext<S>, parambuilder: SuggestionsBuilder, paramregistryKey: ResourceKey<Object[]>, paramtype: SharedSuggestionProvider$ElementSuggestionType): CompletableFuture<Suggestions>;
    static matchesSubStr(parampattern: string, paraminput: string): boolean;
    static suggest<T extends unknown>(paramvalues: T[], parambuilder: SuggestionsBuilder, paramtoString: (param0: T) => string, paramtooltip: (param0: T) => Message): CompletableFuture<Suggestions>;
    static suggest(paramvalues: string[], parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggest(paramvalues: Stream<string>, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggest2DCoordinates(paramcurrentInput: string, paramallSuggestions: SharedSuggestionProvider$TextCoordinates[], parambuilder: SuggestionsBuilder, paramvalidator: (param0: string) => boolean): CompletableFuture<Suggestions>;
    static suggestCoordinates(paramcurrentInput: string, paramallSuggestions: SharedSuggestionProvider$TextCoordinates[], parambuilder: SuggestionsBuilder, paramvalidator: (param0: string) => boolean): CompletableFuture<Suggestions>;
    static suggestResource<T extends unknown>(paramvalues: T[], parambuilder: SuggestionsBuilder, paramid: (param0: T) => Identifier, paramtooltip: (param0: T) => Message): CompletableFuture<Suggestions>;
    static suggestResource<T extends unknown>(paramvalues: Stream<T>, parambuilder: SuggestionsBuilder, paramid: (param0: T) => Identifier, paramtooltip: (param0: T) => Message): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Identifier[], parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Identifier[], parambuilder: SuggestionsBuilder, paramprefix: string): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Stream<Identifier>, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Stream<Identifier>, parambuilder: SuggestionsBuilder, paramprefix: string): CompletableFuture<Suggestions>;
    constructor(connection: ClientPacketListener, minecraft: Minecraft, permissions: PermissionSet)
    // private attended: boolean;
    // private connection: ClientPacketListener;
    // private customCompletionSuggestions: string[];
    // private minecraft: Minecraft;
    // private pendingSuggestionsFuture: CompletableFuture<Suggestions>;
    // private pendingSuggestionsId: number;
    // private permissions: PermissionSet;
    attended(): boolean;
    completeCustomSuggestions(id: number, result: Suggestions): void;
    customSuggestion(context: CommandContext<Object>): CompletableFuture<Suggestions>;
    enabledFeatures(): FeatureFlagSet;
    fabric_markAttended(): void;
    getAbsoluteCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getAllTeams(): string[];
    getAvailableSounds(): Stream<Identifier>;
    getClient(): Minecraft;
    getCustomTabSuggestions(): string[];
    getEntity(): Entity;
    getLevel(): ClientLevel;
    getMeta(arg0: string): Object;
    getOnlinePlayerNames(): string[];
    getPlayer(): LocalPlayer;
    getPosition(): Vec3;
    getRelevantCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getRotation(): Vec2;
    getSelectedEntities(): string[];
    levels(): ResourceKey<Level>[];
    modifyCustomCompletions(action: ClientboundCustomChatCompletionsPacket$Action, entries: string[]): void;
    permissions(): PermissionSet;
    registryAccess(): RegistryAccess;
    sendError(arg0: Component): void;
    sendFeedback(arg0: Component): void;
    suggestRegistryElements(registry: HolderLookup<Object>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder): void;
    suggestRegistryElements(key: ResourceKey<(Object | null)[]>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder, context: CommandContext<Object>): CompletableFuture<Suggestions>;
}