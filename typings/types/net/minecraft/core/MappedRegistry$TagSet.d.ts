import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export interface MappedRegistry$TagSet<T extends unknown> extends Object {
    forEach(action: (param0: TagKey<T>, param1: T[]) => void): void;
    get(id: TagKey<T>): Optional<T[]>;
    getTags(): Stream<T[]>;
    isBound(): boolean;
}