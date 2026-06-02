import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InputControl extends Object{
    mapCodec(): MapCodec<InputControl>;
}