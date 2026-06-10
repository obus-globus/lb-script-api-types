import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricValueOutput } from '../../../../../net/fabricmc/fabric/api/serialization/v1/value/FabricValueOutput.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ProblemReporter } from '../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { ValueOutput$TypedOutputList } from '../../../../../net/minecraft/world/level/storage/ValueOutput$TypedOutputList.d.ts'
import type { ValueOutput$ValueOutputList } from '../../../../../net/minecraft/world/level/storage/ValueOutput$ValueOutputList.d.ts'
export class TagValueOutput extends Object implements FabricValueOutput, ValueOutput {
    static createWithContext(paramproblemReporter: ProblemReporter, paramprovider: HolderLookup$Provider): TagValueOutput;
    static createWithoutContext(paramproblemReporter: ProblemReporter): TagValueOutput;
    private constructor(problemReporter: ProblemReporter, ops: DynamicOps<Tag>, output: CompoundTag)
    // private ops: DynamicOps<Tag>;
    // private output: CompoundTag;
    // private problemReporter: ProblemReporter;
    buildResult(): CompoundTag;
    child(name: string): ValueOutput;
    childrenList(name: string): ValueOutput$ValueOutputList;
    discard(name: string): void;
    isEmpty(): boolean;
    list<T extends Object | number | string | boolean>(name: string, codec: Codec<T>): ValueOutput$TypedOutputList<T>;
    putBoolean(name: string, value: boolean): void;
    putByte(name: string, value: number): void;
    putByteArray(arg0: string, arg1: number[]): void;
    putDouble(name: string, value: number): void;
    putFloat(name: string, value: number): void;
    putInt(name: string, value: number): void;
    putIntArray(name: string, value: number[]): void;
    putLong(name: string, value: number): void;
    putLongArray(arg0: string, arg1: number[]): void;
    putShort(name: string, value: number): void;
    putString(name: string, value: string): void;
    // private reporterForChild(name: string): ProblemReporter;
    store<T extends Object | number | string | boolean>(codec: MapCodec<T>, value: T): void;
    store<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, value: T): void;
    storeNullable<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, value: T): void;
}