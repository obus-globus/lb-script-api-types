import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { ParserBasedArgument } from '../../../../net/minecraft/util/parsing/packrat/commands/ParserBasedArgument.d.ts'
export class NbtTagArgument extends ParserBasedArgument<Tag> {
    static getNbtTag(paramcontext: CommandContext<Object>, paramname: string): Tag;
    static nbtTag(): NbtTagArgument;
    private constructor()
    getExamples(): E[];
}