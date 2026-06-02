import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { ObjectInfo } from '../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
export class ObjectContents extends Record implements ComponentContents {
    static MAP_CODEC: MapCodec<ObjectContents>;
    constructor(contents: ObjectInfo, fallback: Optional<Component>)
    // private contents: ObjectInfo;
    // private fallback: Optional<Component>;
    codec(): MapCodec<ObjectContents>;
    contents(): ObjectInfo;
    equals(o: Object | null): boolean;
    fallback(): Optional<Component>;
    hashCode(): number;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    toString(): string;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
    visit(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}