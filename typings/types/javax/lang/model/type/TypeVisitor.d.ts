import type { ArrayType } from '../../../../javax/lang/model/type/ArrayType.d.ts'
import type { DeclaredType } from '../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { ErrorType } from '../../../../javax/lang/model/type/ErrorType.d.ts'
import type { ExecutableType } from '../../../../javax/lang/model/type/ExecutableType.d.ts'
import type { IntersectionType } from '../../../../javax/lang/model/type/IntersectionType.d.ts'
import type { NoType } from '../../../../javax/lang/model/type/NoType.d.ts'
import type { NullType } from '../../../../javax/lang/model/type/NullType.d.ts'
import type { PrimitiveType } from '../../../../javax/lang/model/type/PrimitiveType.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { TypeVariable } from '../../../../javax/lang/model/type/TypeVariable.d.ts'
import type { UnionType } from '../../../../javax/lang/model/type/UnionType.d.ts'
import type { WildcardType } from '../../../../javax/lang/model/type/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeVisitor<R extends Object | number | string | boolean, P extends Object | number | string | boolean> extends Object{
    visit(arg0: TypeMirror): R;
    visit(arg0: TypeMirror, arg1: P): R;
    visitArray(arg0: ArrayType, arg1: P): R;
    visitDeclared(arg0: DeclaredType, arg1: P): R;
    visitError(arg0: ErrorType, arg1: P): R;
    visitExecutable(arg0: ExecutableType, arg1: P): R;
    visitIntersection(arg0: IntersectionType, arg1: P): R;
    visitNoType(arg0: NoType, arg1: P): R;
    visitNull(arg0: NullType, arg1: P): R;
    visitPrimitive(arg0: PrimitiveType, arg1: P): R;
    visitTypeVariable(arg0: TypeVariable, arg1: P): R;
    visitUnion(arg0: UnionType, arg1: P): R;
    visitUnknown(arg0: TypeMirror, arg1: P): R;
    visitWildcard(arg0: WildcardType, arg1: P): R;
}