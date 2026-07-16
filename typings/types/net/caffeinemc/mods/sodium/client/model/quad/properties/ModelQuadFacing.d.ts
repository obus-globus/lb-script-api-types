import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
export class ModelQuadFacing extends Enum<ModelQuadFacing> {
    static ALIGNED_NORMALS: Vector3fc[];
    static ALL: number;
    static COUNT: number;
    static DIRECTIONS: number;
    static NEG_X: ModelQuadFacing;
    static NEG_Y: ModelQuadFacing;
    static NEG_Z: ModelQuadFacing;
    static NONE: number;
    static OPPOSING_X: number;
    static OPPOSING_Y: number;
    static OPPOSING_Z: number;
    static PACKED_ALIGNED_NORMALS: number[];
    static POS_X: ModelQuadFacing;
    static POS_Y: ModelQuadFacing;
    static POS_Z: ModelQuadFacing;
    static UNASSIGNED: ModelQuadFacing;
    static UNASSIGNED_MASK: number;
    static UNASSIGNED_ORDINAL: number;
    static VALUES: ModelQuadFacing[];
    static bitmapHasUnassigned(paramarg0: number): boolean;
    static bitmapIsOpposingAligned(paramarg0: number): boolean;
    static fromDirection(paramarg0: Direction): ModelQuadFacing;
    static fromNormal(paramarg0: number, paramarg1: number, paramarg2: number): ModelQuadFacing;
    static fromNormal(paramarg0: Vector3fc): ModelQuadFacing;
    static fromPackedNormal(paramarg0: number): ModelQuadFacing;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModelQuadFacing;
    static values(): ModelQuadFacing[];
    private constructor()
    getAlignedNormal(): Vector3fc;
    getAxis(): number;
    getOpposite(): ModelQuadFacing;
    getPackedAlignedNormal(): number;
    getSign(): number;
    isAligned(): boolean;
    name(): "POS_X" | "POS_Y" | "POS_Z" | "NEG_X" | "NEG_Y" | "NEG_Z" | "UNASSIGNED";
}