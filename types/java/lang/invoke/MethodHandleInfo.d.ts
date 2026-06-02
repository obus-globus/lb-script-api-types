import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Member } from '../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MethodHandleInfo extends Object{
    getDeclaringClass(): Class<Object>;
    getMethodType(): MethodType;
    getModifiers(): number;
    getName(): string;
    getReferenceKind(): number;
    isVarArgs(): boolean;
    reflectAs<T extends Member>(arg0: Class<T>, arg1: MethodHandles$Lookup): T;
}