import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class EnumValue extends ConstantValue<Pair<ClassId, Name>> {
    constructor(arg0: ClassId, arg1: Name)
    // private enumClassId: ClassId;
    readonly enumEntryName: Name;
    getEnumEntryName(): Name;
    getType(arg0: ModuleDescriptor): KotlinType;
    toString(): string;
}