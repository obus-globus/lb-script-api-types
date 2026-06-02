import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ArrayValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ArrayValue.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ConstantValueFactory extends Object {
    static INSTANCE: ConstantValueFactory;
    private constructor()
    createArrayValue(arg0: ConstantValue<Object>[], arg1: KotlinType): ArrayValue;
    // private createArrayValue(arg0: (Object | null)[], arg1: ModuleDescriptor, arg2: PrimitiveType): ArrayValue;
    createConstantValue(arg0: Object, arg1: ModuleDescriptor): ConstantValue<Object>;
}