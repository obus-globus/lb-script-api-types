import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConstructorStream } from '../../../../net/lenni0451/reflect/stream/constructor/ConstructorStream.d.ts'
import type { FieldStream } from '../../../../net/lenni0451/reflect/stream/field/FieldStream.d.ts'
import type { MethodStream } from '../../../../net/lenni0451/reflect/stream/method/MethodStream.d.ts'
export class RStream extends Object {
    static of(paramarg0: Class<Object>): RStream;
    static of(paramarg0: Class<Object>, paramarg1: Object): RStream;
    static of(paramarg0: Object): RStream;
    static of(paramarg0: string): RStream;
    static of(paramarg0: string, paramarg1: Object): RStream;
    private constructor(arg0: Class<Object>, arg1: Object)
    // private clazz: Class<Object>;
    // private instance: Object;
    // private withSuper: boolean;
    clazz(): Class<Object>;
    constructors(): ConstructorStream;
    fields(): FieldStream;
    instance(): Object;
    methods(): MethodStream;
    withSuper(): RStream;
}