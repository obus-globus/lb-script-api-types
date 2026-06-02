import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { StringRepresentableArgument } from '../../../../net/minecraft/commands/arguments/StringRepresentableArgument.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
export class TemplateRotationArgument extends StringRepresentableArgument<Rotation> {
    static getRotation(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Rotation;
    static templateRotation(): TemplateRotationArgument;
    private constructor()
}