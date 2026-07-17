import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class RuinedPortalPiece$VerticalPlacement extends Enum<RuinedPortalPiece$VerticalPlacement> implements StringRepresentable {
    static CODEC: Codec<RuinedPortalPiece$VerticalPlacement>;
    static IN_MOUNTAIN: RuinedPortalPiece$VerticalPlacement;
    static IN_NETHER: RuinedPortalPiece$VerticalPlacement;
    static ON_LAND_SURFACE: RuinedPortalPiece$VerticalPlacement;
    static ON_OCEAN_FLOOR: RuinedPortalPiece$VerticalPlacement;
    static PARTLY_BURIED: RuinedPortalPiece$VerticalPlacement;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNDERGROUND: RuinedPortalPiece$VerticalPlacement;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RuinedPortalPiece$VerticalPlacement;
    static values(): RuinedPortalPiece$VerticalPlacement[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "ON_LAND_SURFACE" | "PARTLY_BURIED" | "ON_OCEAN_FLOOR" | "IN_MOUNTAIN" | "UNDERGROUND" | "IN_NETHER";
}