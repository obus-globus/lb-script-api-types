import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { ArgumentType } from '../../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { RequiredArgumentBuilder } from '../../../../../../../com/mojang/brigadier/builder/RequiredArgumentBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricClientCommandSource } from '../../../../../../../net/fabricmc/fabric/api/client/command/v2/FabricClientCommandSource.d.ts'
export class ClientCommands extends Object {
    static argument<T extends unknown>(paramarg0: string, paramarg1: ArgumentType<T>): RequiredArgumentBuilder<FabricClientCommandSource, T>;
    static getActiveDispatcher(): CommandDispatcher<FabricClientCommandSource>;
    static literal(paramarg0: string): LiteralArgumentBuilder<FabricClientCommandSource>;
    static refreshCommandCompletions(): void;
    private constructor()
}