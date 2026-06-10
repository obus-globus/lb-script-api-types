import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TypedInstance } from '../../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentHolder } from '../../../../../../../net/minecraft/core/component/DataComponentHolder.d.ts'
import type { DataComponentPatch } from '../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export interface TransferVariant<O extends Object | number | string | boolean> extends Object, TypedInstance<O>, DataComponentHolder{
    componentsMatch(arg0: DataComponentPatch): boolean;
    get<T extends Object | number | string | boolean>(type: DataComponentType<T>): T;
    getAllOfType<T extends Object | number | string | boolean>(valueClass: Class<T>): Stream<T>;
    getComponents(): TypedDataComponent<Object>[];
    getComponentsPatch(): DataComponentPatch;
    getObject(): O;
    getOrDefault<T extends Object | number | string | boolean>(type: DataComponentType<T>, defaultValue: T): T;
    has(type: DataComponentType<Object>): boolean;
    hasComponents(): boolean;
    is(rawType: O): boolean;
    is(type: Holder<O>): boolean;
    is(set: Holder<O>[]): boolean;
    is(type: ResourceKey<O>): boolean;
    is(tag: TagKey<O>): boolean;
    isBlank(): boolean;
    isOf(arg0: O): boolean;
    tags(): Stream<TagKey<O>>;
    withComponents(arg0: DataComponentPatch): TransferVariant<O>;
}