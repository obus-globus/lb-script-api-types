import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
export class SelectorContents extends Record implements ComponentContents {
    static MAP_CODEC: MapCodec<SelectorContents>;
    constructor(selector: CompilableString<EntitySelector>, separator: Optional<Component>)
    // private selector: CompilableString<EntitySelector>;
    // private separator: Optional<Component>;
    codec(): MapCodec<SelectorContents>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    selector(): CompilableString<EntitySelector>;
    separator(): Optional<Component>;
    toString(): string;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}