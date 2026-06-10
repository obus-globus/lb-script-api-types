import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export interface DelegatedComponent extends Supplier<Component>, Object, Component {
    contains(arg0: Component): boolean;
    contains(other: Component): boolean;
    copy(): MutableComponent;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(arg0: number): string;
    getString(limit: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    plainCopy(): MutableComponent;
    toFlatList(): Component[];
    toFlatList(arg0: Style): Component[];
    toFlatList(rootStyle: Style): Component[];
    tryCollapseToString(): string;
    visit<T extends Object | number | string | boolean>(arg0: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends Object | number | string | boolean>(arg0: FormattedText$StyledContentConsumer<T>, arg1: Style): Optional<T>;
    visit<T extends Object | number | string | boolean>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends Object | number | string | boolean>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}