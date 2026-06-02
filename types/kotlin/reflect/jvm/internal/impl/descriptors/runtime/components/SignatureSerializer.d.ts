import type { Constructor } from '../../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SignatureSerializer extends Object {
    static INSTANCE: SignatureSerializer;
    private constructor()
    constructorDesc(arg0: Constructor<Object>): string;
    fieldDesc(arg0: Field): string;
    methodDesc(arg0: Method): string;
}