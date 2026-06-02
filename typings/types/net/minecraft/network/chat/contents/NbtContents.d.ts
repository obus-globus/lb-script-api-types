import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { DataSource } from '../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
export class NbtContents extends Record implements ComponentContents {
    static MAP_CODEC: MapCodec<NbtContents>;
    static NBT_PATH_CODEC: Codec<Object>;
    // private dataSource: DataSource;
    // private interpreting: boolean;
    // private nbtPath: CompilableString<NbtPathArgument$NbtPath>;
    // private plain: boolean;
    // private separator: Optional<Component>;
    codec(): MapCodec<NbtContents>;
    dataSource(): DataSource;
    equals(o: Object | null): boolean;
    hashCode(): number;
    interpreting(): boolean;
    nbtPath(): CompilableString<NbtPathArgument$NbtPath>;
    plain(): boolean;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    separator(): Optional<Component>;
    toString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}