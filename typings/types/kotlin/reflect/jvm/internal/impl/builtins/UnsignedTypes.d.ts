import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class UnsignedTypes extends Object {
    static INSTANCE: UnsignedTypes;
    static isUnsignedType(paramarg0: KotlinType): boolean;
    private constructor()
    getUnsignedClassIdByArrayClassId(arg0: ClassId): ClassId;
    isShortNameOfUnsignedArray(arg0: Name): boolean;
    isUnsignedClass(arg0: DeclarationDescriptor): boolean;
}