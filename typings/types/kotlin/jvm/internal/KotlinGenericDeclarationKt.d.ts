import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class KotlinGenericDeclarationKt extends Object {
    static findMethodBySignature(self: KDeclarationContainer | null, signature: string): GenericDeclaration | null;
}