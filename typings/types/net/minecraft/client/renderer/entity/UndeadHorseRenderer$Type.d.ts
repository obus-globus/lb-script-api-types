import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class UndeadHorseRenderer$Type extends Enum<UndeadHorseRenderer$Type> {
    static SKELETON: UndeadHorseRenderer$Type;
    static SKELETON_BABY: UndeadHorseRenderer$Type;
    static ZOMBIE: UndeadHorseRenderer$Type;
    static ZOMBIE_BABY: UndeadHorseRenderer$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UndeadHorseRenderer$Type;
    static values(): UndeadHorseRenderer$Type[];
    private constructor(texture: Identifier, model: ModelLayerLocation)
    // private model: ModelLayerLocation;
    // private texture: Identifier;
    name(): "SKELETON" | "SKELETON_BABY" | "ZOMBIE" | "ZOMBIE_BABY";
}