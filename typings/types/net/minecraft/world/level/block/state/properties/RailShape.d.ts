import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
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