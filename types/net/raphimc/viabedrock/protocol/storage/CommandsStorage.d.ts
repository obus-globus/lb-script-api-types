import type { CommandDispatcher } from '../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { CommandNode } from '../../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { RootCommandNode } from '../../../../../com/mojang/brigadier/tree/RootCommandNode.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { CommandData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData.d.ts'
import type { CommandData$EnumData } from '../../../../../net/raphimc/viabedrock/protocol/model/CommandData$EnumData.d.ts'
export class CommandsStorage extends StoredObject {
    static RESULT_ALLOW_SEND: number;
    static RESULT_CANCEL: number;
    static RESULT_NO_OP: number;
    constructor(arg0: UserConnection, arg1: CommandData[])
    // private commands: CommandData[];
    // private dispatcher: CommandDispatcher<UserConnection>;
    // private softEnumMap: { [key: string]: CommandData$EnumData };
    // private buildCommandTree(): void;
    complete(arg0: string): Suggestions;
    execute(arg0: string): number;
    // private getNodeIndices(arg0: RootCommandNode<UserConnection>): Map<CommandNode<UserConnection>, number>;
    getSoftEnum(arg0: string): CommandData$EnumData;
    updateCommandTree(): void;
    writeCommandTree(arg0: PacketWrapper): void;
}