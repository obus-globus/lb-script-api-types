import type { Class } from '../java/lang/Class.d.ts'
import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Reflection } from '../retrofit2/Reflection.d.ts'
export class Reflection$Java8 extends Reflection {
    constructor()
    describeMethodParameter(arg0: Method, arg1: number): string;
    invokeDefaultMethod(arg0: Method, arg1: Class<Object>, arg2: Object, arg3: Object[]): Object;
    isDefaultMethod(arg0: Method): boolean;
}