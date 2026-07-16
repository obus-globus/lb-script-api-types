import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class DonkeyRenderer$Type extends Enum<DonkeyRenderer$Type> {
    static DONKEY: DonkeyRenderer$Type;
    static DONKEY_BABY: DonkeyRenderer$Type;
    static MULE: DonkeyRenderer$Type;
    static MULE_BABY: DonkeyRenderer$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DonkeyRenderer$Type;
    static values(): DonkeyRenderer$Type[];
    private constructor(texture: Identifier, model: ModelLayerLocation)
    // private model: ModelLayerLocation;
    // private texture: Identifier;
    name(): "DONKEY" | "DONKEY_BABY" | "MULE" | "MULE_BABY";
}