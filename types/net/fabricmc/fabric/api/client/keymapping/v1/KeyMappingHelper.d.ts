import type { InputConstants$Key } from '../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KeyMapping } from '../../../../../../../net/minecraft/client/KeyMapping.d.ts'
export class KeyMappingHelper extends Object {
    static getBoundKeyOf(paramarg0: KeyMapping): InputConstants$Key;
    static registerKeyMapping(paramarg0: KeyMapping): KeyMapping;
    private constructor()
}