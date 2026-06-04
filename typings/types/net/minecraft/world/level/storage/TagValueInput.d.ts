import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricValueInput } from '../../../../../net/fabricmc/fabric/api/serialization/v1/value/FabricValueInput.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { NumericTag } from '../../../../../net/minecraft/nbt/NumericTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../../../net/minecraft/nbt/TagType.d.ts'
import type { ProblemReporter } from '../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueInputContextHelper } from '../../../../../net/minecraft/world/level/storage/ValueInputContextHelper.d.ts'
export class TagValueInput extends Object implements FabricValueInput, ValueInput {
    static create(paramproblemReporter: ProblemReporter, paramholders: HolderLookup$Provider, paramtag: CompoundTag): ValueInput;
    static create(paramproblemReporter: ProblemReporter, paramholders: HolderLookup$Provider, paramtags: CompoundTag[]): ValueInput[];
    private constructor(problemReporter: ProblemReporter, context: ValueInputContextHelper, input: CompoundTag)
    // private context: ValueInputContextHelper;
    // private input: CompoundTag;
    // private problemReporter: ProblemReporter;
    child(name: string): Optional<ValueInput>;
    childOrEmpty(name: string): ValueInput;
    childrenList(name: string): Optional<ValueInput[]>;
    childrenListOrEmpty(name: string): ValueInput[];
    contains(arg0: string): boolean;
    getBooleanOr(name: string, defaultValue: boolean): boolean;
    getByteOr(name: string, defaultValue: number): number;
    getDoubleOr(name: string, defaultValue: number): number;
    getFloatOr(name: string, defaultValue: number): number;
    getInt(name: string): Optional<number>;
    getIntArray(name: string): Optional<number[]>;
    getIntOr(name: string, defaultValue: number): number;
    getLong(name: string): Optional<number>;
    getLongOr(name: string, defaultValue: number): number;
    // private getNumericTag(name: string): NumericTag;
    getOptionalByteArray(arg0: string): Optional<number[]>;
    getOptionalByteArray(arg0: string): Optional<Object>;
    getOptionalLongArray(arg0: string): Optional<number[]>;
    getOptionalLongArray(arg0: string): Optional<Object>;
    // private getOptionalTypedTag<T extends Tag>(name: string, expectedType: TagType<T>): T;
    getShortOr(name: string, defaultValue: number): number;
    getString(name: string): Optional<string>;
    getStringOr(name: string, defaultValue: string): string;
    keySet(): E[];
    list(name: string, codec: Codec<T>): Optional<T[]>;
    listOrEmpty(name: string, codec: Codec<T>): T[];
    lookup(): HolderLookup$Provider;
    read(codec: MapCodec<T>): Optional<T>;
    read(name: string, codec: Codec<T>): Optional<T>;
    // private wrapChild(name: string, compoundTag: CompoundTag): ValueInput;
    // private wrapList(name: string, context: ValueInputContextHelper, list: (Object | null)[]): ValueInput[];
    // private wrapTypedList(name: string, list: (Object | null)[], codec: Codec<T>): T[];
}