import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundCommandsPacket$NodeBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeBuilder.d.ts'
import type { ClientboundCommandsPacket$NodeStub } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeStub.d.ts'
export class ClientboundCommandsPacket$LiteralNodeStub extends Record implements ClientboundCommandsPacket$NodeStub {
    private constructor(id: string)
    // private id: string;
    build<S extends unknown>(context: CommandBuildContext, builder: ClientboundCommandsPacket$NodeBuilder<S>): ArgumentBuilder<S, any>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}