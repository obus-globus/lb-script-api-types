import type { SymmetricGroup3 } from '../../../com/mojang/math/SymmetricGroup3.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { FrontAndTop } from '../../../net/minecraft/core/FrontAndTop.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { Matrix3fc } from '../../../org/joml/Matrix3fc.d.ts'
import type { Vector3i } from '../../../org/joml/Vector3i.d.ts'
export class OctahedralGroup extends Enum<OctahedralGroup> implements StringRepresentable {
    static BLOCK_ROT_X_180: OctahedralGroup;
    static BLOCK_ROT_X_270: OctahedralGroup;
    static BLOCK_ROT_X_90: OctahedralGroup;
    static BLOCK_ROT_Y_180: OctahedralGroup;
    static BLOCK_ROT_Y_270: OctahedralGroup;
    static BLOCK_ROT_Y_90: OctahedralGroup;
    static BLOCK_ROT_Z_180: OctahedralGroup;
    static BLOCK_ROT_Z_270: OctahedralGroup;
    static BLOCK_ROT_Z_90: OctahedralGroup;
    static IDENTITY: OctahedralGroup;
    static INVERSION: OctahedralGroup;
    static INVERT_X: OctahedralGroup;
    static INVERT_Y: OctahedralGroup;
    static INVERT_Z: OctahedralGroup;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROT_120_NNN: OctahedralGroup;
    static ROT_120_NNP: OctahedralGroup;
    static ROT_120_NPN: OctahedralGroup;
    static ROT_120_NPP: OctahedralGroup;
    static ROT_120_PNN: OctahedralGroup;
    static ROT_120_PNP: OctahedralGroup;
    static ROT_120_PPN: OctahedralGroup;
    static ROT_120_PPP: OctahedralGroup;
    static ROT_180_EDGE_XY_NEG: OctahedralGroup;
    static ROT_180_EDGE_XY_POS: OctahedralGroup;
    static ROT_180_EDGE_XZ_NEG: OctahedralGroup;
    static ROT_180_EDGE_XZ_POS: OctahedralGroup;
    static ROT_180_EDGE_YZ_NEG: OctahedralGroup;
    static ROT_180_EDGE_YZ_POS: OctahedralGroup;
    static ROT_180_FACE_XY: OctahedralGroup;
    static ROT_180_FACE_XZ: OctahedralGroup;
    static ROT_180_FACE_YZ: OctahedralGroup;
    static ROT_60_REF_NNN: OctahedralGroup;
    static ROT_60_REF_NNP: OctahedralGroup;
    static ROT_60_REF_NPN: OctahedralGroup;
    static ROT_60_REF_NPP: OctahedralGroup;
    static ROT_60_REF_PNN: OctahedralGroup;
    static ROT_60_REF_PNP: OctahedralGroup;
    static ROT_60_REF_PPN: OctahedralGroup;
    static ROT_60_REF_PPP: OctahedralGroup;
    static ROT_90_REF_X_NEG: OctahedralGroup;
    static ROT_90_REF_X_POS: OctahedralGroup;
    static ROT_90_REF_Y_NEG: OctahedralGroup;
    static ROT_90_REF_Y_POS: OctahedralGroup;
    static ROT_90_REF_Z_NEG: OctahedralGroup;
    static ROT_90_REF_Z_POS: OctahedralGroup;
    static ROT_90_X_NEG: OctahedralGroup;
    static ROT_90_X_POS: OctahedralGroup;
    static ROT_90_Y_NEG: OctahedralGroup;
    static ROT_90_Y_POS: OctahedralGroup;
    static ROT_90_Z_NEG: OctahedralGroup;
    static ROT_90_Z_POS: OctahedralGroup;
    static SWAP_NEG_XY: OctahedralGroup;
    static SWAP_NEG_XZ: OctahedralGroup;
    static SWAP_NEG_YZ: OctahedralGroup;
    static SWAP_XY: OctahedralGroup;
    static SWAP_XZ: OctahedralGroup;
    static SWAP_YZ: OctahedralGroup;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OctahedralGroup;
    static values(): (Object | null)[];
    private constructor(name: string, permutation: SymmetricGroup3, invertX: boolean, invertY: boolean, invertZ: boolean)
    // private invertX: boolean;
    // private invertY: boolean;
    // private invertZ: boolean;
    // private name: string;
    // private permutation: SymmetricGroup3;
    // private rotatedDirections: Map<Direction, Direction>;
    // private transformation: Matrix3fc;
    compose(that: OctahedralGroup): OctahedralGroup;
    getSerializedName(): string;
    inverse(): OctahedralGroup;
    inverts(axis: Direction$Axis): boolean;
    permutation(): SymmetricGroup3;
    rotate(direction: Direction): Direction;
    rotate(input: FrontAndTop): FrontAndTop;
    rotate(v: Vector3i): Vector3i;
    toString(): string;
    // private trace(): number;
    transformation(): Matrix3fc;
    name(): "IDENTITY" | "ROT_180_FACE_XY" | "ROT_180_FACE_XZ" | "ROT_180_FACE_YZ" | "ROT_120_NNN" | "ROT_120_NNP" | "ROT_120_NPN" | "ROT_120_NPP" | "ROT_120_PNN" | "ROT_120_PNP" | "ROT_120_PPN" | "ROT_120_PPP" | "ROT_180_EDGE_XY_NEG" | "ROT_180_EDGE_XY_POS" | "ROT_180_EDGE_XZ_NEG" | "ROT_180_EDGE_XZ_POS" | "ROT_180_EDGE_YZ_NEG" | "ROT_180_EDGE_YZ_POS" | "ROT_90_X_NEG" | "ROT_90_X_POS" | "ROT_90_Y_NEG" | "ROT_90_Y_POS" | "ROT_90_Z_NEG" | "ROT_90_Z_POS" | "INVERSION" | "INVERT_X" | "INVERT_Y" | "INVERT_Z" | "ROT_60_REF_NNN" | "ROT_60_REF_NNP" | "ROT_60_REF_NPN" | "ROT_60_REF_NPP" | "ROT_60_REF_PNN" | "ROT_60_REF_PNP" | "ROT_60_REF_PPN" | "ROT_60_REF_PPP" | "SWAP_XY" | "SWAP_YZ" | "SWAP_XZ" | "SWAP_NEG_XY" | "SWAP_NEG_YZ" | "SWAP_NEG_XZ" | "ROT_90_REF_X_NEG" | "ROT_90_REF_X_POS" | "ROT_90_REF_Y_NEG" | "ROT_90_REF_Y_POS" | "ROT_90_REF_Z_NEG" | "ROT_90_REF_Z_POS";
}