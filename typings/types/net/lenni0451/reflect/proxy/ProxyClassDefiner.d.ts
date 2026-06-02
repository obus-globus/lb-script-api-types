import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BuiltClass } from '../../../../net/lenni0451/reflect/bytecode/wrapper/BuiltClass.d.ts'
export interface ProxyClassDefiner extends Object{
    defineProxyClass(arg0: BuiltClass, arg1: Class<Object>, arg2: Class<Object>[]): Class<Object>;
}