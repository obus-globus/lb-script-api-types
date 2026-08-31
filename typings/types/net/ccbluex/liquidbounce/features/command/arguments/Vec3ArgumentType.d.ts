import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3ArgumentType$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/Vec3ArgumentType$Companion.d.ts'
import type { Coordinates } from '../../../../../../net/minecraft/commands/arguments/coordinates/Coordinates.d.ts'
/**
 * Client shell over the vanilla coordinate parsing ({@link WorldCoordinates.parseDouble} /
 * {@link LocalCoordinates.parse}). Only position resolution differs from vanilla: the vanilla
 * getters require a server-side {@link net.minecraft.commands.CommandSourceStack}, so
 * {@link getPosition} resolves against the local player instead.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientArguments.kt:77}
 */
export class Vec3ArgumentType extends Object implements ArgumentType<Coordinates> {
    static Companion: Vec3ArgumentType$Companion;
    constructor(centerCorrect?: boolean)
    // private centerCorrect: boolean;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): Coordinates;
    parse(reader: StringReader): Coordinates;
}