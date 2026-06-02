import type { ServicesKeyType } from '../../../../com/mojang/authlib/yggdrasil/ServicesKeyType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServicesKeySet extends Object{
    keys(arg0: ServicesKeyType): E[];
}