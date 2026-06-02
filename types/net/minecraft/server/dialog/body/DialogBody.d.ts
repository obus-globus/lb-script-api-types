import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DialogBody extends Object{
    mapCodec(): MapCodec<DialogBody>;
}