import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassSignature } from '../../../../sun/reflect/generics/tree/ClassSignature.d.ts'
import type { MethodTypeSignature } from '../../../../sun/reflect/generics/tree/MethodTypeSignature.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export interface Visitor<T extends Object | number | string | boolean> extends Object, TypeTreeVisitor<T>{
    visitClassSignature(arg0: ClassSignature): void;
    visitMethodTypeSignature(arg0: MethodTypeSignature): void;
}