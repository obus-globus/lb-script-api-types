import type { Message } from '../../../../../com/mojang/brigadier/Message.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Language } from '../../../../../net/minecraft/locale/Language.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { DataSource } from '../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { ObjectInfo } from '../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class TextList extends Object implements Component {
    static EMPTY: TextList;
    static EMPTY: FormattedText;
    static STOP_ITERATION: Optional<Unit>;
    static empty(): MutableComponent;
    static keybind(paramname: string): MutableComponent;
    static literal(paramtext: string): MutableComponent;
    static nbt(paramnbtPath: CompilableString<NbtPathArgument$NbtPath>, paraminterpreting: boolean, paramplain: boolean, paramseparator: Optional<Component>, paramdataSource: DataSource): MutableComponent;
    static nullToEmpty(paramtext: string): Component;
    static object(paraminfo: ObjectInfo): MutableComponent;
    static object(paraminfo: ObjectInfo, paramfallback: Component): MutableComponent;
    static of(paramarg0: Component[]): TextList;
    static of(paramarg0: (Object | null)[]): TextList;
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
    constructor(arg0: Component[])
    // private language: Language;
    // private ordered: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    readonly siblings: Component[];
    contains(other: Component): boolean;
    copy(): MutableComponent;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(limit: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    plainCopy(): MutableComponent;
    toFlatList(): Component[];
    toFlatList(rootStyle: Style): Component[];
    tryCollapseToString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}