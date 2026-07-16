import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PalettedContainerROExtension } from '../../../../../net/caffeinemc/mods/sodium/client/world/PalettedContainerROExtension.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ThreadingDetector } from '../../../../../net/minecraft/util/ThreadingDetector.d.ts'
import type { PaletteResize } from '../../../../../net/minecraft/world/level/chunk/PaletteResize.d.ts'
import type { PalettedContainer$CountConsumer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer$CountConsumer.d.ts'
import type { PalettedContainer$Data } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer$Data.d.ts'
import type { PalettedContainerRO } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
import type { PalettedContainerRO$PackedData } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO$PackedData.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export class PalettedContainer<T extends unknown> extends Object implements PalettedContainerROExtension<Object>, PaletteResize<T>, PalettedContainerRO<T> {
    static clone<T extends unknown>(paramarg0: PalettedContainerRO<T>): PalettedContainerRO<T>;
    static codecRO<T extends unknown>(paramelementCodec: Codec<T>, paramstrategy: Strategy<T>, paramdefaultValue: T): Codec<PalettedContainerRO<T>>;
    static codecRW<T extends unknown>(paramelementCodec: Codec<T>, paramstrategy: Strategy<T>, paramdefaultValue: T): Codec<PalettedContainer<T>>;
    static noResizeExpected<T extends unknown>(): PaletteResize<T>;
    static of<T extends unknown>(paramarg0: PalettedContainerRO<T>): PalettedContainerROExtension<T>;
    static unpack<T extends unknown>(paramstrategy: Strategy<T>, paramdiscData: PalettedContainerRO$PackedData<T>): DataResult<PalettedContainer<T>>;
    constructor(initialValue: T, strategy: Strategy<T>)
    // private data: PalettedContainer$Data<T>;
    // private strategy: Strategy<T>;
    // private threadingDetector: ThreadingDetector;
    acquire(): void;
    // private asOptional(arg0: number[]): Optional<Object>;
    bitsPerEntry(): number;
    copy(): PalettedContainer<T>;
    count(output: (param0: T, param1: number) => void): void;
    // private createOrReuseData(oldData: PalettedContainer$Data<T>, targetBits: number): PalettedContainer$Data<T>;
    forEachInPalette(consumer: (param0: T) => void): void;
    get(index: number): T;
    get(x: number, y: number, z: number): T;
    getAll(consumer: (param0: T) => void): void;
    // private getAndSet(index: number, value: T): T;
    getAndSet(x: number, y: number, z: number, value: T): T;
    getAndSetUnchecked(x: number, y: number, z: number, value: T): T;
    // private getOrCreate(arg0: number): number[];
    getSerializedSize(): number;
    maybeHas(predicate: (param0: T) => boolean): boolean;
    onResize(bits: number, lastAddedValue: T): number;
    pack(arg0: Strategy<Object>): PalettedContainerRO$PackedData<Object>;
    read(buffer: FriendlyByteBuf): void;
    recreate(): PalettedContainer<T>;
    release(): void;
    // private set(index: number, value: T): void;
    set(x: number, y: number, z: number, value: T): void;
    sodium$copy(): PalettedContainerRO<Object>;
    sodium$unpack(arg0: Object[]): void;
    sodium$unpack(arg0: Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    write(buffer: FriendlyByteBuf): void;
}