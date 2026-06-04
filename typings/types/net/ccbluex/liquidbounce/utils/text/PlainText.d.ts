import type { Message } from '../../../../../com/mojang/brigadier/Message.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { PlainTextContents } from '../../../../../net/minecraft/network/chat/contents/PlainTextContents.d.ts'
import type { DataSource } from '../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { ObjectInfo } from '../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class PlainText extends Record implements CharSequence, Component, FormattedCharSequence {
    static EMPTY: PlainText;
    static EMPTY: FormattedText;
    static EMPTY: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static NEW_LINE: PlainText;
    static SPACE: PlainText;
    static STOP_ITERATION: Optional<Unit>;
    static backward(paramplainText: string, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static backward(paramplainText: string, paramstyle: Style, parammodifier: (param0: number) => kotlin.Int): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static codepoint(paramcodepoint: number, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    static composite(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static composite(paramparts: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[]): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static composite(parampart: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static composite(paramfirst: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, paramsecond: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static composite(paramparts: (Object | null)[]): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static decorateOutput(paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean, parammodifier: (param0: number) => kotlin.Int): (param0: number, param1: Style, param2: number) => kotlin.Boolean;
    static empty(): PlainText;
    static empty(): MutableComponent;
    static forward(paramplainText: string, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static forward(paramplainText: string, paramstyle: Style, parammodifier: (param0: number) => kotlin.Int): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static fromList(parampartCopy: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[]): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static fromPair(paramfirst: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, paramsecond: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static keybind(paramname: string): MutableComponent;
    static literal(paramtext: string): MutableComponent;
    static nbt(paramnbtPath: CompilableString<NbtPathArgument$NbtPath>, paraminterpreting: boolean, paramplain: boolean, paramseparator: Optional<Component>, paramdataSource: DataSource): MutableComponent;
    static nullToEmpty(paramtext: string): Component;
    static object(paraminfo: ObjectInfo): MutableComponent;
    static object(paraminfo: ObjectInfo, paramfallback: Component): MutableComponent;
    static of(paramarg0: string): PlainText;
    static of(paramarg0: string, paramarg1: ChatFormatting): PlainText;
    static of(paramarg0: string, paramarg1: Style): PlainText;
    static of(paramarg0: string, paramarg1: TextColor): PlainText;
    static of(paramarg0: PlainTextContents, paramarg1: Style): PlainText;
    static score(paramname: string, paramobjective: string): MutableComponent;
    static score(parampattern: CompilableString<EntitySelector>, paramobjective: string): MutableComponent;
    static selector(parampattern: CompilableString<EntitySelector>, paramseparator: Optional<Component>): MutableComponent;
    static translatable(paramkey: string): MutableComponent;
    static translatable(paramkey: string, paramargs: (Object | null)[]): MutableComponent;
    static translatableEscape(paramkey: string, paramargs: (Object | null)[]): MutableComponent;
    static translatableWithFallback(paramkey: string, paramfallback: string): MutableComponent;
    static translatableWithFallback(paramkey: string, paramfallback: string, paramargs: (Object | null)[]): MutableComponent;
    static translationArg(parammessage: Message): Component;
    static translationArg(paramuri: URI): Component;
    static translationArg(paramdate: Date): Component;
    static translationArg(paramuuid: UUID): Component;
    static translationArg(paramid: Identifier): Component;
    static translationArg(paramchunkPos: ChunkPos): Component;
    constructor(arg0: PlainTextContents)
    constructor(content: PlainTextContents, style: Style)
    // private content: PlainTextContents;
    /*not mapped: */ length(): number;
    readonly style: Style;
    accept(arg0: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
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
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
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
    visit(arg0: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(arg0: FormattedText$StyledContentConsumer<T>, arg1: Style): Optional<T>;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}