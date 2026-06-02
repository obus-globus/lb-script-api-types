import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { StringRepresentableArgument } from '../../../../net/minecraft/commands/arguments/StringRepresentableArgument.d.ts'
import type { Mirror } from '../../../../net/minecraft/world/level/block/Mirror.d.ts'
export class TemplateMirrorArgument extends StringRepresentableArgument<Mirror> {
    static getMirror(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Mirror;
    static templateMirror(): StringRepresentableArgument<Mirror>;
    private constructor()
}