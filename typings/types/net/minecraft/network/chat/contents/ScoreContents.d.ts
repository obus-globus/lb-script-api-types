import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ScoreContents extends Record implements ComponentContents {
    static INNER_CODEC: MapCodec<ScoreContents>;
    static MAP_CODEC: MapCodec<ScoreContents>;
    constructor(name: Either<CompilableString<EntitySelector>, string>, objective: string)
    // private name: Either<CompilableString<EntitySelector>, string>;
    // private objective: string;
    codec(): MapCodec<ScoreContents>;
    equals(o: Object | null): boolean;
    // private findTargetName(source: CommandSourceStack): ScoreHolder;
    // private getScore(name: ScoreHolder, source: CommandSourceStack): MutableComponent;
    hashCode(): number;
    name(): Either<CompilableString<EntitySelector>, string>;
    objective(): string;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    toString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}