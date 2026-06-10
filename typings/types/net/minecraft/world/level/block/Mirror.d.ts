import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
export class Mirror extends Enum<Mirror> implements StringRepresentable {
    static CODEC: Codec<Mirror>;
    static FRONT_BACK: Mirror;
    static LEFT_RIGHT: Mirror;
    static LEGACY_CODEC: Codec<Mirror>;
    static NONE: Mirror;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Mirror;
    static values(): (Object | null)[];
    private constructor(id: string, rotation: OctahedralGroup)
    // private id: string;
    // private rotation: OctahedralGroup;
    // private symbol: Component;
    getRotation(value: Direction): Rotation;
    getSerializedName(): string;
    mirror(rotation: number, steps: number): number;
    mirror(direction: Direction): Direction;
    rotation(): OctahedralGroup;
    symbol(): Component;
    name(): "NONE" | "LEFT_RIGHT" | "FRONT_BACK";
}