import type { CommandDispatcher } from '../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CommandFunction } from '../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerFunctionLibrary } from '../../../net/minecraft/server/ServerFunctionLibrary.d.ts'
export class ServerFunctionManager extends Object {
    constructor(server: MinecraftServer, library: ServerFunctionLibrary)
    // private library: ServerFunctionLibrary;
    // private postReload: boolean;
    // private server: MinecraftServer;
    // private ticking: CommandFunction<CommandSourceStack>[];
    execute(functionIn: CommandFunction<CommandSourceStack>, sender: CommandSourceStack): void;
    // private executeTagFunctions(functions: CommandFunction<CommandSourceStack>[], loadFunctionTag: Identifier): void;
    get(id: Identifier): Optional<CommandFunction<CommandSourceStack>>;
    getDispatcher(): CommandDispatcher<CommandSourceStack>;
    getFunctionNames(): Identifier[];
    getGameLoopSender(): CommandSourceStack;
    getTag(id: Identifier): CommandFunction<CommandSourceStack>[];
    getTagNames(): Identifier[];
    // private postReload(library: ServerFunctionLibrary): void;
    replaceLibrary(library: ServerFunctionLibrary): void;
    tick(): void;
}