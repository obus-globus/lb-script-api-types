import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StrongholdPieces$StrongholdPiece$SmallDoorType extends Enum<StrongholdPieces$StrongholdPiece$SmallDoorType> {
    static GRATES: StrongholdPieces$StrongholdPiece$SmallDoorType;
    static IRON_DOOR: StrongholdPieces$StrongholdPiece$SmallDoorType;
    static LEGACY_CODEC: Codec<StrongholdPieces$StrongholdPiece$SmallDoorType>;
    static OPENING: StrongholdPieces$StrongholdPiece$SmallDoorType;
    static WOOD_DOOR: StrongholdPieces$StrongholdPiece$SmallDoorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StrongholdPieces$StrongholdPiece$SmallDoorType;
    static values(): StrongholdPieces$StrongholdPiece$SmallDoorType[];
    private constructor()
    name(): "OPENING" | "WOOD_DOOR" | "GRATES" | "IRON_DOOR";
}