import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InputControl } from '../../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
export class InputControlTypes extends Object {
    static bootstrap(paramregistry: MapCodec<InputControl>[]): MapCodec<InputControl>;
    constructor()
}