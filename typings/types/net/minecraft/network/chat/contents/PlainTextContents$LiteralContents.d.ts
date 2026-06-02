import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { PlainTextContents } from '../../../../../net/minecraft/network/chat/contents/PlainTextContents.d.ts'
export class PlainTextContents$LiteralContents extends Record implements PlainTextContents {
    static EMPTY: PlainTextContents;
    static MAP_CODEC: MapCodec<PlainTextContents>;
    static create(paramtext: string): PlainTextContents;
    constructor(text: string)
    // private text: string;
    codec(): MapCodec<PlainTextContents>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    text(): string;
    toString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}