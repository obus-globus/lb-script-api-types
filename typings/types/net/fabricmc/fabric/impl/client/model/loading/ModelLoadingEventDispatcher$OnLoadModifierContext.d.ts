import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$OnLoad$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoad$Context.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelLoadingEventDispatcher$OnLoadModifierContext extends Object implements ModelModifier$OnLoad$Context {
    private constructor()
    // private id: Identifier;
    id(): Identifier;
    // private prepare(arg0: Identifier): void;
}