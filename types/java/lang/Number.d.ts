import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Number extends Object implements Serializable {
    constructor()
    toByte(): number;
    toChar(): string;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toShort(): number;
}