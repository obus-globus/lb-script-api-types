import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { StringRepresentableArgument } from '../../../../net/minecraft/commands/arguments/StringRepresentableArgument.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class HeightmapTypeArgument extends StringRepresentableArgument<Heightmap$Types> {
    static getHeightmap(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Heightmap$Types;
    static heightmap(): HeightmapTypeArgument;
    private constructor()
    convertId(id: string): string;
}