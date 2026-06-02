import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FieldNamingStrategy extends Object{
    translateName(arg0: Field): string;
}