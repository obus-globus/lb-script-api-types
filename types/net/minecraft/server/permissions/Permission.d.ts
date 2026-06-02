import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Permission extends Object{
    codec(): MapCodec<Permission>;
}