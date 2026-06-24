import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KotlinGenericDeclaration extends Object{
    findJavaDeclaration(): GenericDeclaration | null;
}