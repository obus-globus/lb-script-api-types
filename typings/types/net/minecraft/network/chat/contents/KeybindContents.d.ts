import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ComponentMarker } from '../../../../../com/nikoverflow/exploitpreventer/translation/ComponentMarker.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class KeybindContents extends Object implements ComponentMarker, ComponentContents {
    static MAP_CODEC: MapCodec<KeybindContents>;
    constructor(name: string)
    // private ep$isMarked: boolean;
    readonly name: string;
    // private nameResolver: () => Component;
    codec(): MapCodec<KeybindContents>;
    ep$mark(): void;
    equals(o: Object | null): boolean;
    getName(): string;
    // private getNestedComponent(): Component;
    hashCode(): number;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    toString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}