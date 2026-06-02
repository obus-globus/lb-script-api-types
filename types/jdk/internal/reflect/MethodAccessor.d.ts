import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MethodAccessor extends Object{
    invoke(arg0: Object, arg1: Object[]): Object;
    invoke(arg0: Object, arg1: Object[], arg2: Class<Object>): Object;
}