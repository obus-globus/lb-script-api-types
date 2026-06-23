import type { ArgumentCommandNode } from '../../../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { CommandNode } from '../../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ClientboundCommandsPacket$NodeInspector<S extends unknown> extends Object{
    isExecutable(node: CommandNode<S>): boolean;
    isRestricted(node: CommandNode<S>): boolean;
    suggestionId(node: ArgumentCommandNode<S, Object>): Identifier;
}