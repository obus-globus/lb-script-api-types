import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Language } from '../../../../../net/minecraft/locale/Language.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class TextList extends Object implements Component {
    static EMPTY: TextList;
    static STOP_ITERATION: Optional<Unit>;
    static of(paramarg0: Component[]): TextList;
    static of(...paramarg0: Component[]): TextList;
    constructor(arg0: Component[])
    // private language: Language;
    // private ordered: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    readonly siblings: Component[];
    contains(other: Component): boolean;
    copy(): MutableComponent;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(limit: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    plainCopy(): MutableComponent;
    toFlatList(): Component[];
    toFlatList(rootStyle: Style): Component[];
    tryCollapseToString(): string;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}