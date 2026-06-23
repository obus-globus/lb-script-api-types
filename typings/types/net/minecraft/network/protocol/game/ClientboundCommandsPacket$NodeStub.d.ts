import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundCommandsPacket$NodeBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeBuilder.d.ts'
export interface ClientboundCommandsPacket$NodeStub extends Object{
    build<S extends Object | number | string | boolean>(context: CommandBuildContext, builder: ClientboundCommandsPacket$NodeBuilder<S>): ArgumentBuilder<S, any>;
    write(output: FriendlyByteBuf): void;
}