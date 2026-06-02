import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricValueInput } from '../../../../../net/fabricmc/fabric/api/serialization/v1/value/FabricValueInput.d.ts'
import type { ValueInputMixin } from '../../../../../net/fabricmc/fabric/mixin/serialization/ValueInputMixin.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export interface ValueInput extends Object, FabricValueInput, ValueInputMixin{
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
    getOptionalByteArray(arg0: string): Optional<number[]>;
    getOptionalLongArray(arg0: string): Optional<number[]>;
    getShortOr(name: string, defaultValue: number): number;
    getString(name: string): Optional<string>;
    getStringOr(name: string, defaultValue: string): string;
    keySet(): E[];
    list(name: string, codec: Codec<T>): Optional<T[]>;
    listOrEmpty(name: string, codec: Codec<T>): T[];
    lookup(): HolderLookup$Provider;
    read(codec: MapCodec<T>): Optional<T>;
    read(name: string, codec: Codec<T>): Optional<T>;
}