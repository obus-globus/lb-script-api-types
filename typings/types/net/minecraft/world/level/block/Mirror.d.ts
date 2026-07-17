import type { OctahedralGroup } from '../../../../../com/mojang/math/OctahedralGroup.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
export class Mirror extends Enum<Mirror> implements StringRepresentable {
    static CODEC: Codec<Mirror>;
    static FRONT_BACK: Mirror;
    static LEFT_RIGHT: Mirror;
    static LEGACY_CODEC: Codec<Mirror>;
    static NONE: Mirror;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Mirror;
    static values(): Mirror[];
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