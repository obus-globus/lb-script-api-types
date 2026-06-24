import type { CommandDispatcher } from '../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricClientCommandSource } from '../../../../../../net/fabricmc/fabric/api/client/command/v2/FabricClientCommandSource.d.ts'
export class ClientCommandInternals extends Object {
    static addCommands(paramarg0: CommandDispatcher<FabricClientCommandSource>, paramarg1: FabricClientCommandSource): void;
    static executeCommand(paramarg0: string, paramarg1: FabricClientCommandSource, paramarg2: FabricClientCommandSource): boolean;
    static finalizeInit(): void;
    static getActiveDispatcher(): CommandDispatcher<FabricClientCommandSource>;
    static setActiveDispatcher(paramarg0: CommandDispatcher<FabricClientCommandSource>): void;
    constructor()
}