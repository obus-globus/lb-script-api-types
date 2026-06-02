import type { CharMatcher } from '../../../com/google/common/base/CharMatcher.d.ts'
import type { CommandDispatcher } from '../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Message } from '../../../com/mojang/brigadier/Message.d.ts'
import type { ResultConsumer } from '../../../com/mojang/brigadier/ResultConsumer.d.ts'
import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandExceptionType } from '../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { SimpleCommandExceptionType } from '../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BinaryOperator } from '../../../java/util/function/BinaryOperator.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PermissionContext } from '../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContext$Type } from '../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
import type { PermissionContextOwner } from '../../../net/fabricmc/fabric/api/permission/v1/PermissionContextOwner.d.ts'
import type { PermissionNode } from '../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { TriState } from '../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { CommandPermissionContext$Extension } from '../../../net/fabricmc/fabric/impl/permission/CommandPermissionContext$Extension.d.ts'
import type { CommandResultCallback } from '../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { CommandSigningContext } from '../../../net/minecraft/commands/CommandSigningContext.d.ts'
import type { CommandSource } from '../../../net/minecraft/commands/CommandSource.d.ts'
import type { ExecutionCommandSource } from '../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { SharedSuggestionProvider } from '../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { SharedSuggestionProvider$ElementSuggestionType } from '../../../net/minecraft/commands/SharedSuggestionProvider$ElementSuggestionType.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { TraceCallbacks } from '../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
import type { HolderLookup } from '../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ChatType$Bound } from '../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { OutgoingChatMessage } from '../../../net/minecraft/network/chat/OutgoingChatMessage.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { PermissionLevel } from '../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { TaskChainer } from '../../../net/minecraft/util/TaskChainer.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
import type { Vec2 } from '../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class CommandSourceStack extends Object implements PermissionContextOwner, CommandPermissionContext$Extension, ExecutionCommandSource<CommandSourceStack>, SharedSuggestionProvider {
    static ERROR_NOT_ENTITY: SimpleCommandExceptionType;
    static ERROR_NOT_PLAYER: SimpleCommandExceptionType;
    static MATCH_SPLITTER: CharMatcher;
    static filterResources(paramvalues: (Object | null)[], paramcontents: string, paramprefix: string, paramconverter: (param0: Object | null) => Identifier, paramconsumer: (param0: Object | null) => void): void;
    static filterResources(paramvalues: (Object | null)[], paramcontents: string, paramconverter: (param0: Object | null) => Identifier, paramconsumer: (param0: Object | null) => void): void;
    static listSuggestions(paramcontext: CommandContext<Object>, parambuilder: SuggestionsBuilder, paramregistryKey: ResourceKey<Object>, paramtype: SharedSuggestionProvider$ElementSuggestionType): CompletableFuture<Suggestions>;
    static matchesSubStr(parampattern: string, paraminput: string): boolean;
    static resultConsumer(): (param0: Object | null, param1: CommandContext<Object>, param2: boolean) => void;
    static suggest(paramvalues: (Object | null)[], parambuilder: SuggestionsBuilder, paramtoString: (param0: Object | null) => string, paramtooltip: (param0: Object | null) => Message): CompletableFuture<Suggestions>;
    static suggest(paramvalues: string[], parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggest(paramvalues: (Object | null)[], parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggest(paramvalues: Stream<string>, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggest2DCoordinates(paramcurrentInput: string, paramallSuggestions: E[], parambuilder: SuggestionsBuilder, paramvalidator: (param0: string) => kotlin.Boolean): CompletableFuture<Suggestions>;
    static suggestCoordinates(paramcurrentInput: string, paramallSuggestions: E[], parambuilder: SuggestionsBuilder, paramvalidator: (param0: string) => kotlin.Boolean): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: (Object | null)[], parambuilder: SuggestionsBuilder, paramid: (param0: Object | null) => Identifier, paramtooltip: (param0: Object | null) => Message): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Stream<Object>, parambuilder: SuggestionsBuilder, paramid: (param0: Object | null) => Identifier, paramtooltip: (param0: Object | null) => Message): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Identifier[], parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Identifier[], parambuilder: SuggestionsBuilder, paramprefix: string): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Stream<Identifier>, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggestResource(paramvalues: Stream<Identifier>, parambuilder: SuggestionsBuilder, paramprefix: string): CompletableFuture<Suggestions>;
    constructor(source: CommandSource, position: Vec3, rotation: Vec2, level: ServerLevel, permissions: PermissionSet, textName: string, displayName: Component, server: MinecraftServer, entity: Entity)
    private constructor(source: CommandSource, position: Vec3, rotation: Vec2, level: ServerLevel, permissions: PermissionSet, textName: string, displayName: Component, server: MinecraftServer, entity: Entity, silent: boolean, resultCallback: (param0: boolean, param1: number) => void, anchor: EntityAnchorArgument$Anchor, signingContext: CommandSigningContext, chatMessageChainer: (param0: CompletableFuture<Object>, param1: (param0: Object | null) => void) => void)
    readonly anchor: EntityAnchorArgument$Anchor;
    readonly chatMessageChainer: (param0: CompletableFuture<Object>, param1: (param0: Object | null) => void) => void;
    // private context: PermissionContext;
    readonly displayName: Component;
    readonly entity: Entity;
    readonly level: ServerLevel;
    // private permissions: PermissionSet;
    // private resultCallback: (param0: boolean, param1: number) => void;
    readonly rotation: Vec2;
    readonly server: MinecraftServer;
    readonly signingContext: CommandSigningContext;
    readonly silent: boolean;
    // private source: CommandSource;
    // private sourceType: PermissionContext$Type;
    // private sourceUuid: UUID;
    readonly textName: string;
    // private worldPosition: Vec3;
    // private broadcastToAdmins(message: Component): void;
    callback(): (param0: boolean, param1: number) => void;
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>): T;
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>, arg1: T): T;
    checkPermission(arg0: Identifier): TriState;
    checkPermission(arg0: Identifier, arg1: boolean): boolean;
    checkPermission(arg0: Identifier, arg1: PermissionLevel): boolean;
    clearCallbacks<T extends ExecutionCommandSource<T>>(): T;
    customSuggestion(context: CommandContext<Object>): CompletableFuture<Suggestions>;
    dispatcher(): CommandDispatcher<CommandSourceStack>;
    enabledFeatures(): FeatureFlagSet;
    fabric_getType(): PermissionContext$Type;
    fabric_getUuid(): UUID;
    facing(entity: Entity, anchor: EntityAnchorArgument$Anchor): CommandSourceStack;
    facing(pos: Vec3): CommandSourceStack;
    getAbsoluteCoordinates(): E[];
    getAllTeams(): E[];
    getAnchor(): EntityAnchorArgument$Anchor;
    getAvailableSounds(): Stream<Identifier>;
    getChatMessageChainer(): (param0: CompletableFuture<Object>, param1: (param0: Object | null) => void) => void;
    getCustomTabSuggestions(): E[];
    getDisplayName(): Component;
    getEntity(): Entity;
    getEntityOrException(): Entity;
    getLevel(): ServerLevel;
    // private getLookup(key: ResourceKey<(Object | null)[]>): Optional<HolderLookup<Object>>;
    getOnlinePlayerNames(): E[];
    getPermissionContext(): PermissionContext;
    getPermissionContext(): PermissionContext;
    getPlayer(): ServerPlayer;
    getPlayerOrException(): ServerPlayer;
    getPosition(): Vec3;
    getRelevantCoordinates(): E[];
    getRotation(): Vec2;
    getSelectedEntities(): E[];
    getServer(): MinecraftServer;
    getSigningContext(): CommandSigningContext;
    getTextName(): string;
    handleError(type: CommandExceptionType, message: Message, forked: boolean, tracer: TraceCallbacks): void;
    handleError(e: CommandSyntaxException, forked: boolean, tracer: TraceCallbacks): void;
    isPlayer(): boolean;
    isSilent(): boolean;
    levels(): ResourceKey<Level>[];
    permissions(): PermissionSet;
    registryAccess(): RegistryAccess;
    sendChatMessage(message: OutgoingChatMessage, filtered: boolean, chatType: ChatType$Bound): void;
    sendFailure(message: Component): void;
    sendSuccess(messageSupplier: () => Component, broadcast: boolean): void;
    sendSystemMessage(message: Component): void;
    shouldFilterMessageTo(receiver: ServerPlayer): boolean;
    suggestRegistryElements(key: ResourceKey<(Object | null)[]>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder, context: CommandContext<Object>): CompletableFuture<Suggestions>;
    suggestRegistryElements(registry: HolderLookup<Object>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder): void;
    withAnchor(anchor: EntityAnchorArgument$Anchor): CommandSourceStack;
    withCallback(resultCallback: (param0: boolean, param1: number) => void): CommandSourceStack;
    withCallback(newCallback: (param0: boolean, param1: number) => void, combiner: (param0: (param0: boolean, param1: number) => void, param1: Object | null) => unknown): CommandSourceStack;
    withEntity(entity: Entity): CommandSourceStack;
    withLevel(level: ServerLevel): CommandSourceStack;
    withMaximumPermission(newPermissions: PermissionSet): CommandSourceStack;
    withPermission(permissions: PermissionSet): CommandSourceStack;
    withPosition(pos: Vec3): CommandSourceStack;
    withRotation(rotation: Vec2): CommandSourceStack;
    withSigningContext(signingContext: CommandSigningContext, chatMessageChainer: (param0: CompletableFuture<Object>, param1: (param0: Object | null) => void) => void): CommandSourceStack;
    withSource(source: CommandSource): CommandSourceStack;
    withSuppressedOutput(): CommandSourceStack;
}