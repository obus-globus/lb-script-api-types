import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export interface PlainTextContents extends Object, ComponentContents{
    codec(): MapCodec<PlainTextContents>;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    text(): string;
    visit<T extends Object | number | string | boolean>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends Object | number | string | boolean>(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}