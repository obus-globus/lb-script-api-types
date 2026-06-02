import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PoiType } from '../../../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PoiHelper extends Object {
    static register(paramarg0: Identifier, paramarg1: number, paramarg2: number, paramarg3: BlockState[]): PoiType;
    static register(paramarg0: Identifier, paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): PoiType;
    private constructor()
}