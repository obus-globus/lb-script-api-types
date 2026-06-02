import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Key extends Serializable, Object{
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
}