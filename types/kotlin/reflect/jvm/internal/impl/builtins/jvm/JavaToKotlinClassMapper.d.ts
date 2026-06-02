import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JavaToKotlinClassMapper extends Object {
    static INSTANCE: JavaToKotlinClassMapper;
    private constructor()
    convertMutableToReadOnly(arg0: ClassDescriptor): ClassDescriptor;
    convertReadOnlyToMutable(arg0: ClassDescriptor): ClassDescriptor;
    isMutable(arg0: ClassDescriptor): boolean;
    isReadOnly(arg0: ClassDescriptor): boolean;
    mapJavaToKotlin(arg0: FqName, arg1: KotlinBuiltIns, arg2: number): ClassDescriptor;
    mapPlatformClass(arg0: FqName, arg1: KotlinBuiltIns): E[];
}