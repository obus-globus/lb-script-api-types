import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Direction$AxisDirection } from '../../../net/minecraft/core/Direction$AxisDirection.d.ts'
import type { Vec3i } from '../../../net/minecraft/core/Vec3i.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4fc } from '../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
export class Direction extends Enum<Direction> implements StringRepresentable {
    static BY_2D_DATA: (Object | null)[];
    static BY_ID: (param0: Direction) => unknown;
    static CODEC: StringRepresentable$EnumCodec<Direction>;
    static DOWN: Direction;
    static EAST: Direction;
    static LEGACY_ID_CODEC: Codec<Direction>;
    static LEGACY_ID_CODEC_2D: Codec<Direction>;
    static NORTH: Direction;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SOUTH: Direction;
    static STREAM_CODEC: StreamCodec<ByteBuf, Direction>;
    static UP: Direction;
    static VERTICAL_CODEC: Codec<Direction>;
    static WEST: Direction;
    static YXZ_AXIS_ORDER: Direction$Axis[];
    static allShuffled(paramrandom: RandomSource): E[];
    static axisStepOrder(parammovement: Vec3): Direction$Axis[];
    static byName(paramname: string): Direction;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static from2DDataValue(paramdata: number): Direction;
    static from3DDataValue(paramdata: number): Direction;
    static fromAxisAndDirection(paramaxis: Direction$Axis, paramdirection: Direction$AxisDirection): Direction;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static fromYRot(paramyRot: number): Direction;
    static get(paramaxisDirection: Direction$AxisDirection, paramaxis: Direction$Axis): Direction;
    static getApproximateNearest(paramdx: number, paramdy: number, paramdz: number): Direction;
    static getApproximateNearest(paramarg0: number, paramarg1: number, paramarg2: number): Direction;
    static getApproximateNearest(paramvec: Vec3): Direction;
    static getFacingAxis(paramentity: Entity, paramaxis: Direction$Axis): Direction;
    static getNearest(paramx: number, paramy: number, paramz: number, paramorElse: Direction): Direction;
    static getNearest(paramvec: Vec3i, paramorElse: Direction): Direction;
    static getRandom(paramarg0: RandomSource): Direction;
    static getYRot(paramdirection: Direction): number;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static orderedByNearest(paramentity: Entity): (Object | null)[];
    static rotate(parammatrix: Matrix4fc, paramfacing: Direction): Direction;
    static stream(): Stream<Direction>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Direction;
    static values(): (Object | null)[];
    private constructor(data3d: number, oppositeIndex: number, data2d: number, name: string, axisDirection: Direction$AxisDirection, axis: Direction$Axis, normal: Vec3i)
    readonly axis: Direction$Axis;
    readonly axisDirection: Direction$AxisDirection;
    // private data2d: number;
    // private data3d: number;
    readonly name: string;
    // private normal: Vec3i;
    // private normalVec3: Vec3;
    // private normalVec3f: Vector3fc;
    // private offsetX: number;
    // private offsetY: number;
    // private offsetZ: number;
    // private oppositeIndex: number;
    get2DDataValue(): number;
    get3DDataValue(): number;
    getAxis(): Direction$Axis;
    getAxisDirection(): Direction$AxisDirection;
    getClockWise(): Direction;
    getClockWise(axis: Direction$Axis): Direction;
    // private getClockWiseX(): Direction;
    // private getClockWiseZ(): Direction;
    getCounterClockWise(): Direction;
    getCounterClockWise(axis: Direction$Axis): Direction;
    // private getCounterClockWiseX(): Direction;
    // private getCounterClockWiseZ(): Direction;
    getName(): string;
    getOpposite(): Direction;
    getRotation(): Quaternionf;
    getSerializedName(): string;
    getStepX(): number;
    getStepY(): number;
    getStepZ(): number;
    getUnitVec3(): Vec3;
    getUnitVec3f(): Vector3fc;
    getUnitVec3i(): Vec3i;
    isFacingAngle(yAngle: number): boolean;
    step(): Vector3f;
    toString(): string;
    toYRot(): number;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}