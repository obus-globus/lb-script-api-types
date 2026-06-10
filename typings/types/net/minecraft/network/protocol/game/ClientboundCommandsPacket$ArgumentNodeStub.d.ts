import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundCommandsPacket$NodeBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeBuilder.d.ts'
import type { ClientboundCommandsPacket$NodeStub } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeStub.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundCommandsPacket$ArgumentNodeStub extends Record implements ClientboundCommandsPacket$NodeStub {
    private constructor(id: string, argumentType: ArgumentTypeInfo$Template<Object>, suggestionId: Identifier)
    // private argumentType: ArgumentTypeInfo$Template<Object>;
    // private id: string;
    // private suggestionId: Identifier;
    argumentType(): ArgumentTypeInfo$Template<Object>;
    build<S extends Object | number | string | boolean>(context: CommandBuildContext, builder: ClientboundCommandsPacket$NodeBuilder<S>): ArgumentBuilder<S, Object>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    suggestionId(): Identifier;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}