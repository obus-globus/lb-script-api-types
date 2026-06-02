import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { TypeDescriptor$OfMethod } from '../../../java/lang/invoke/TypeDescriptor$OfMethod.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MethodTypeDesc extends ConstantDesc, TypeDescriptor$OfMethod<ClassDesc, MethodTypeDesc>, Object{
    changeParameterType(arg0: number, arg1: ClassDesc): MethodTypeDesc;
    changeReturnType(arg0: ClassDesc): MethodTypeDesc;
    descriptorString(): string;
    displayDescriptor(): string;
    dropParameterTypes(arg0: number, arg1: number): MethodTypeDesc;
    insertParameterTypes(arg0: number, arg1: ClassDesc[]): MethodTypeDesc;
    parameterArray(): ClassDesc[];
    parameterCount(): number;
    parameterList(): ClassDesc[];
    parameterType(arg0: number): ClassDesc;
    resolveConstantDesc(arg0: MethodHandles$Lookup): MethodType;
    returnType(): ClassDesc;
}