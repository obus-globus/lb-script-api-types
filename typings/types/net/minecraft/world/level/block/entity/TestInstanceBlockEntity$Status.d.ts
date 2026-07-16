import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class TestInstanceBlockEntity$Status extends Enum<TestInstanceBlockEntity$Status> implements StringRepresentable {
    static CLEARED: TestInstanceBlockEntity$Status;
    static CODEC: Codec<TestInstanceBlockEntity$Status>;
    static FINISHED: TestInstanceBlockEntity$Status;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RUNNING: TestInstanceBlockEntity$Status;
    static STREAM_CODEC: StreamCodec<ByteBuf, TestInstanceBlockEntity$Status>;
    static byIndex(paramindex: number): TestInstanceBlockEntity$Status;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TestInstanceBlockEntity$Status;
    static values(): TestInstanceBlockEntity$Status[];
    private constructor(id: string, index: number)
    // private id: string;
    // private index: number;
    getSerializedName(): string;
    name(): "CLEARED" | "RUNNING" | "FINISHED";
}