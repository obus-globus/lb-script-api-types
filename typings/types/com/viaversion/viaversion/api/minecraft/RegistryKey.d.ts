import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RegistryKey extends Object{
    registry(): Key;
}