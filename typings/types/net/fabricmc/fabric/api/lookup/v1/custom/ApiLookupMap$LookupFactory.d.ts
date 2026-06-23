import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ApiLookupMap$LookupFactory<L extends unknown> extends Object{
    get(arg0: Class<Object>, arg1: Class<Object>): L;
}