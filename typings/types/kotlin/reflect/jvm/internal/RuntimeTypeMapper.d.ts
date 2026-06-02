import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { JvmFunctionSignature } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature.d.ts'
import type { JvmFunctionSignature$KotlinFunction } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature$KotlinFunction.d.ts'
import type { JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/JvmPropertySignature.d.ts'
import type { CallableMemberDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class RuntimeTypeMapper extends Object {
    static INSTANCE: RuntimeTypeMapper;
    // private JAVA_LANG_VOID: ClassId;
    mapJvmClassToKotlinClassId(klass: Class<Object>): ClassId;
    // private mapJvmFunctionSignature(descriptor: FunctionDescriptor): JvmFunctionSignature$KotlinFunction;
    // private mapName(descriptor: CallableMemberDescriptor): string;
    mapPropertySignature(possiblyOverriddenProperty: PropertyDescriptor): JvmPropertySignature;
    mapSignature(possiblySubstitutedFunction: FunctionDescriptor): JvmFunctionSignature;
}