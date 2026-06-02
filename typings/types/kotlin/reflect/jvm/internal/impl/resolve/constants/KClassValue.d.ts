import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { ClassLiteralValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KClassValue$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/KClassValue$Companion.d.ts'
import type { KClassValue$Value } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/KClassValue$Value.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class KClassValue extends ConstantValue<KClassValue$Value> {
    static Companion: KClassValue$Companion;
    constructor(arg0: ClassId, arg1: number)
    constructor(arg0: ClassLiteralValue)
    constructor(arg0: KClassValue$Value)
    getArgumentType(arg0: ModuleDescriptor): KotlinType;
    getType(arg0: ModuleDescriptor): KotlinType;
}