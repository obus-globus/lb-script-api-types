import type { SkullModelBase$State } from '../../../../../../net/minecraft/client/model/object/skull/SkullModelBase$State.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class WitherSkullRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    isDangerous: boolean;
    modelState: SkullModelBase$State;
}