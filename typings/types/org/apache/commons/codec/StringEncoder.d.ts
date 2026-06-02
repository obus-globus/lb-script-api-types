import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Encoder } from '../../../../org/apache/commons/codec/Encoder.d.ts'
export interface StringEncoder extends Object, Encoder{
    encode(arg0: string): string;
}