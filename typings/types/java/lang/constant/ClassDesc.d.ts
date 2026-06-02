import type { Class } from '../../../java/lang/Class.d.ts'
import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { TypeDescriptor$OfField } from '../../../java/lang/invoke/TypeDescriptor$OfField.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ClassDesc extends ConstantDesc, TypeDescriptor$OfField<ClassDesc>, Object{
    arrayType(): ClassDesc;
    arrayType(arg0: number): ClassDesc;
    componentType(): ClassDesc;
    descriptorString(): string;
    displayName(): string;
    isArray(): boolean;
    isClassOrInterface(): boolean;
    isPrimitive(): boolean;
    nested(arg0: string): ClassDesc;
    nested(arg0: string, arg1: string[]): ClassDesc;
    packageName(): string;
    resolveConstantDesc(arg0: MethodHandles$Lookup): Class<Object>;
}