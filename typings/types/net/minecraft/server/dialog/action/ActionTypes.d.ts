import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Action } from '../../../../../net/minecraft/server/dialog/action/Action.d.ts'
export class ActionTypes extends Object {
    static bootstrap(paramregistry: MapCodec<Action>[]): MapCodec<Action>;
    constructor()
}