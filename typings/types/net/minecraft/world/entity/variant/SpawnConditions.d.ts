import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpawnCondition } from '../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
export class SpawnConditions extends Object {
    static bootstrap(paramregistry: MapCodec<SpawnCondition>[]): MapCodec<SpawnCondition>;
    constructor()
}