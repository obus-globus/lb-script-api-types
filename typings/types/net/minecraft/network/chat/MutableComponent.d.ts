import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
import type { Language } from '../../../../net/minecraft/locale/Language.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
export class MutableComponent extends Object implements Component {
    static EMPTY: FormattedText;
    static STOP_ITERATION: Optional<Unit>;
    static create(paramcontents: ComponentContents): MutableComponent;
    constructor(contents: ComponentContents, siblings: Component[], style: Style)
    readonly contents: ComponentContents;
    // private decomposedWith: Language;
    readonly siblings: Component[];
    readonly style: Style;
    readonly visualOrderText: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    append(arg0: string): MutableComponent;
    append(component: Component): MutableComponent;
    contains(other: Component): boolean;
    copy(): MutableComponent;
    equals(o: Object | null): boolean;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(limit: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    hashCode(): number;
    plainCopy(): MutableComponent;
    setStyle(style: Style): MutableComponent;
    toFlatList(): Component[];
    toFlatList(rootStyle: Style): Component[];
    toString(): string;
    tryCollapseToString(): string;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
    withColor(color: number): MutableComponent;
    withColor(color: TextColor): MutableComponent;
    withStyle(updater: (param0: Style) => Style): MutableComponent;
    withStyle(...formats: ChatFormatting[]): MutableComponent;
    withStyle(format: ChatFormatting): MutableComponent;
    withStyle(patch: Style): MutableComponent;
    withoutShadow(): MutableComponent;
}