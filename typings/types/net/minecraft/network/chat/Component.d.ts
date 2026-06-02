import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ComponentContents } from '../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export interface Component extends Message, Object, FormattedText{
    contains(other: Component): boolean;
    copy(): MutableComponent;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(limit: number): string;
    getString(): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    plainCopy(): MutableComponent;
    toFlatList(): Component[];
    toFlatList(rootStyle: Style): Component[];
    tryCollapseToString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}