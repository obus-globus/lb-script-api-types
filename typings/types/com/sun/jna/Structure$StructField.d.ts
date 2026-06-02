import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Structure$StructField extends Object {
    constructor()
    context: FromNativeContext;
    field: Field;
    isReadOnly: boolean;
    isVolatile: boolean;
    name: string;
    offset: number;
    readConverter: FromNativeConverter;
    size: number;
    type: Class<Object>;
    writeConverter: ToNativeConverter;
    toString(): string;
}