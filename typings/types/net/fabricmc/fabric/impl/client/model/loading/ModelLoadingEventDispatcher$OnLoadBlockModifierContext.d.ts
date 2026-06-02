import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$OnLoadBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoadBlock$Context.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelLoadingEventDispatcher$OnLoadBlockModifierContext extends Object implements ModelModifier$OnLoadBlock$Context {
    private constructor()
    // private state: BlockState;
    // private prepare(arg0: BlockState): void;
    state(): BlockState;
}