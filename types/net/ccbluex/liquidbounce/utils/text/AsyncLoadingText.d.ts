import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Deferred } from '../../../../../kotlinx/coroutines/Deferred.d.ts'
import type { DelegatedComponent } from '../../../../../net/ccbluex/liquidbounce/utils/text/DelegatedComponent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class AsyncLoadingText extends Record implements DelegatedComponent {
    static DEFAULT_ON_EXCEPTION: (param0: Throwable) => Component;
    static DEFAULT_ON_LOADING: () => Component;
    static EMPTY: FormattedText;
    static STOP_ITERATION: Optional<Unit>;
    static lazy(paramarg0: Function0<Component>): () => unknown;
    constructor(arg0: Deferred<Component>)
    constructor(delegate: Deferred<Component>, onLoading: () => Component, onException: (param0: Throwable) => Component)
    // private delegate: Deferred<Component>;
    // private onException: (param0: Throwable) => Component;
    // private onLoading: () => Component;
    contains(arg0: Component): boolean;
    copy(): MutableComponent;
    delegate(): Deferred<Component>;
    equals(arg0: Object | null): boolean;
    get(): Component;
    getContents(): ComponentContents;
    getSiblings(): Component[];
    getString(): string;
    getString(arg0: number): string;
    getStyle(): Style;
    getVisualOrderText(): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    hashCode(): number;
    onException(): (param0: Throwable) => Component;
    onLoading(): () => Component;
    plainCopy(): MutableComponent;
    toFlatList(): Component[];
    toFlatList(arg0: Style): Component[];
    toString(): string;
    tryCollapseToString(): string;
    visit(arg0: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(arg0: FormattedText$StyledContentConsumer<T>, arg1: Style): Optional<T>;
}