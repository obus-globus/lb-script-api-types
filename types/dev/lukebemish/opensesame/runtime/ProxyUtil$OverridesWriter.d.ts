import type { MethodType } from '../../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
export interface ProxyUtil$OverridesWriter extends Object{
    writeOverrides(arg0: MethodType, arg1: MethodType, arg2: string, arg3: string, arg4: ClassVisitor, arg5: string, arg6: boolean): void;
}