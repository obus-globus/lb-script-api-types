import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface KeyMappingAccessor extends Object{
    fabric_getBoundKey(): InputConstants$Key;
}