import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleTypes extends Object{
    getTypes(): Class<Object>[];
}