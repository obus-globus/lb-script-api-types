import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { PlainTextContents } from '../../../../../net/minecraft/network/chat/contents/PlainTextContents.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class PlainText extends Record implements CharSequence, Component, FormattedCharSequence {
    static EMPTY: PlainText;
    static NEW_LINE: PlainText;
    static SPACE: PlainText;
    static STOP_ITERATION: Optional<Unit>;
    static empty(): PlainText;
    static of(paramarg0: string): PlainText;
    static of(paramarg0: string, paramarg1: ChatFormatting): PlainText;
    static of(paramarg0: string, paramarg1: Style): PlainText;
    static of(paramarg0: string, paramarg1: TextColor): PlainText;
    static of(paramarg0: PlainTextContents, paramarg1: Style): PlainText;
    constructor(arg0: PlainTextContents)
    constructor(content: PlainTextContents, style: Style)
    // private content: PlainTextContents;
    /*not mapped: */ length(): number;
    accept(arg0: (param0: number, param1: Style, param2: number) => boolean): boolean;
    chars(): IntStream;
    codePoints(): IntStream;
    contains(arg0: Component): boolean;
    contains(other: Component): boolean;
    content(): PlainTextContents;
    copy(): MutableComponent;
    equals(arg0: Object | null): boolean;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(arg0: number): string;
    getString(limit: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    hashCode(): number;
    isEmpty(): boolean;
    plainCopy(): MutableComponent;
    string(): string;
    style(): Style;
    subSequence(arg0: number, arg1: number): CharSequence;
    toFlatList(): Component[];
    toFlatList(arg0: Style): Component[];
    toFlatList(rootStyle: Style): Component[];
    toString(): string;
    tryCollapseToString(): string;
    visit<T extends unknown>(arg0: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(arg0: FormattedText$StyledContentConsumer<T>, arg1: Style): Optional<T>;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}