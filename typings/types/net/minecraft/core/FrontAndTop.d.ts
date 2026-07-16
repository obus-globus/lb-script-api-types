import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class FrontAndTop extends Enum<FrontAndTop> implements StringRepresentable {
    static DOWN_EAST: FrontAndTop;
    static DOWN_NORTH: FrontAndTop;
    static DOWN_SOUTH: FrontAndTop;
    static DOWN_WEST: FrontAndTop;
    static EAST_UP: FrontAndTop;
    static NORTH_UP: FrontAndTop;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SOUTH_UP: FrontAndTop;
    static UP_EAST: FrontAndTop;
    static UP_NORTH: FrontAndTop;
    static UP_SOUTH: FrontAndTop;
    static UP_WEST: FrontAndTop;
    static WEST_UP: FrontAndTop;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromFrontAndTop(paramfront: Direction, paramtop: Direction): FrontAndTop;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FrontAndTop;
    static values(): FrontAndTop[];
    private constructor(name: string, front: Direction, top: Direction)
    // private front: Direction;
    // private name: string;
    // private top: Direction;
    front(): Direction;
    getSerializedName(): string;
    top(): Direction;
    name(): "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP";
}