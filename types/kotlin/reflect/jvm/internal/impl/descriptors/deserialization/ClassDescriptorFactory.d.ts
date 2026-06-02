import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface ClassDescriptorFactory extends Object{
    createClass(arg0: ClassId): ClassDescriptor;
    getAllContributedClassesIfPossible(arg0: FqName): E[];
    shouldCreateClass(arg0: FqName, arg1: Name): boolean;
}