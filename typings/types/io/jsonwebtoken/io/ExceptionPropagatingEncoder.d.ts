import type { Encoder } from '../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExceptionPropagatingEncoder<T extends unknown, R extends unknown> extends Object implements Encoder<T, R> {
    constructor(arg0: Encoder<T, R>)
    // private encoder: Encoder<T, R>;
    encode(arg0: T): R;
}