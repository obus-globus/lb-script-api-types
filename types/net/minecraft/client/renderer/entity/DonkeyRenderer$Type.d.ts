import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class DonkeyRenderer$Type extends Enum<DonkeyRenderer$Type> {
    static DONKEY: DonkeyRenderer$Type;
    static DONKEY_BABY: DonkeyRenderer$Type;
    static MULE: DonkeyRenderer$Type;
    static MULE_BABY: DonkeyRenderer$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DonkeyRenderer$Type;
    static values(): (Object | null)[];
    private constructor(texture: Identifier, model: ModelLayerLocation)
    // private model: ModelLayerLocation;
    // private texture: Identifier;
    name(): "DONKEY" | "DONKEY_BABY" | "MULE" | "MULE_BABY";
}