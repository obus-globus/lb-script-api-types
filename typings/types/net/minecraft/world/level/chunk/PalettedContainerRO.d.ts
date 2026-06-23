import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { PalettedContainer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer.d.ts'
import type { PalettedContainer$CountConsumer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer$CountConsumer.d.ts'
import type { PalettedContainerRO$PackedData } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO$PackedData.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export interface PalettedContainerRO<T extends unknown> extends Object {
    bitsPerEntry(): number;
    copy(): PalettedContainer<T>;
    count(output: (param0: T, param1: number) => void): void;
    get(x: number, y: number, z: number): T;
    getAll(consumer: (param0: T) => void): void;
    getSerializedSize(): number;
    maybeHas(predicate: (param0: T) => boolean): boolean;
    pack(strategy: Strategy<T>): PalettedContainerRO$PackedData<T>;
    recreate(): PalettedContainer<T>;
    write(buffer: FriendlyByteBuf): void;
}