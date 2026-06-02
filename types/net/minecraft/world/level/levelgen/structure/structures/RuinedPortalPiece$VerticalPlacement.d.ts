import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class RuinedPortalPiece$VerticalPlacement extends Enum<RuinedPortalPiece$VerticalPlacement> implements StringRepresentable {
    static CODEC: Codec<RuinedPortalPiece$VerticalPlacement>;
    static IN_MOUNTAIN: RuinedPortalPiece$VerticalPlacement;
    static IN_NETHER: RuinedPortalPiece$VerticalPlacement;
    static ON_LAND_SURFACE: RuinedPortalPiece$VerticalPlacement;
    static ON_OCEAN_FLOOR: RuinedPortalPiece$VerticalPlacement;
    static PARTLY_BURIED: RuinedPortalPiece$VerticalPlacement;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNDERGROUND: RuinedPortalPiece$VerticalPlacement;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RuinedPortalPiece$VerticalPlacement;
    static values(): (Object | null)[];
    private constructor(name: string)
    readonly name: string;
    getName(): string;
    getSerializedName(): string;
    name(): "ON_LAND_SURFACE" | "PARTLY_BURIED" | "ON_OCEAN_FLOOR" | "IN_MOUNTAIN" | "UNDERGROUND" | "IN_NETHER";
}