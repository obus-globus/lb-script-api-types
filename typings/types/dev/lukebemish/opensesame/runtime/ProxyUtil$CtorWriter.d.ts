import type { MethodType } from '../../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
export interface ProxyUtil$CtorWriter extends Object{
    writeConstructor(arg0: MethodType, arg1: MethodType, arg2: ClassVisitor): void;
}