import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Clause extends Serializable, Object{
    eval(arg0: number[]): boolean;
    size(): number;
}