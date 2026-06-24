import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
export abstract class AbstractBaseNCodecStreamBuilder<T extends unknown, C extends BaseNCodec, B extends AbstractBaseNCodecStreamBuilder<T, C, B>> extends Object implements Supplier<T> {
    constructor()
    // private baseNCodec: C;
    // private encode: boolean;
    asThis(): B;
    getBaseNCodec(): C;
    getEncode(): boolean;
    newBaseNCodec(): C;
    setBaseNCodec(arg0: C): B;
    setEncode(arg0: boolean): B;
}