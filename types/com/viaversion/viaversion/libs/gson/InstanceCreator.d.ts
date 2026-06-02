import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InstanceCreator<T extends Object | number | string | boolean> extends Object{
    createInstance(arg0: Type): T;
}