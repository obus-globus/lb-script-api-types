import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class RailShape extends Enum<RailShape> implements StringRepresentable {
    static ASCENDING_EAST: RailShape;
    static ASCENDING_NORTH: RailShape;
    static ASCENDING_SOUTH: RailShape;
    static ASCENDING_WEST: RailShape;
    static EAST_WEST: RailShape;
    static NORTH_EAST: RailShape;
    static NORTH_SOUTH: RailShape;
    static NORTH_WEST: RailShape;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SOUTH_EAST: RailShape;
    static SOUTH_WEST: RailShape;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RailShape;
    static values(): RailShape[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    isSlope(): boolean;
    toString(): string;
    name(): "NORTH_SOUTH" | "EAST_WEST" | "ASCENDING_EAST" | "ASCENDING_WEST" | "ASCENDING_NORTH" | "ASCENDING_SOUTH" | "SOUTH_EAST" | "SOUTH_WEST" | "NORTH_WEST" | "NORTH_EAST";
}