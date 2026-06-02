import type { Decoder } from '../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExceptionPropagatingDecoder<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Decoder<T, R> {
    constructor(arg0: Decoder<T, R>)
    // private decoder: Decoder<T, R>;
    decode(arg0: T): R;
}