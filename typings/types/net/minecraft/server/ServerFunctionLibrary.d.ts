import type { CommandDispatcher } from '../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CommandFunction } from '../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PreparableReloadListener } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { TagLoader } from '../../../net/minecraft/tags/TagLoader.d.ts'
export class ServerFunctionLibrary extends Object implements FabricResourceReloader, PreparableReloadListener {
    static TYPE_KEY: ResourceKey<CommandFunction<CommandSourceStack>[]>;
    constructor(functionCompilationPermissions: PermissionSet, dispatcher: CommandDispatcher<CommandSourceStack>)
    // private dispatcher: CommandDispatcher<CommandSourceStack>;
    // private functionCompilationPermissions: PermissionSet;
    readonly functions: Map<Identifier, CommandFunction<CommandSourceStack>>;
    // private id: Identifier;
    // private tags: Map<Identifier, CommandFunction<CommandSourceStack>[]>;
    // private tagsLoader: TagLoader<CommandFunction<CommandSourceStack>>;
    fabric$getId(): Identifier;
    getAvailableTags(): Identifier[];
    getFunction(id: Identifier): Optional<CommandFunction<CommandSourceStack>>;
    getFunctions(): Map<Identifier, CommandFunction<CommandSourceStack>>;
    getName(): string;
    getTag(tag: Identifier): CommandFunction<CommandSourceStack>[];
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
}