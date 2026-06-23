import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ApiLookupMap$LookupConstructor<L extends unknown> extends Object{
    get(arg0: Identifier, arg1: Class<Object>, arg2: Class<Object>): L;
}