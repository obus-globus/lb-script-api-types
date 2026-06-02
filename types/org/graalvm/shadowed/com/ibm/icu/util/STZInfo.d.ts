import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SimpleTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/SimpleTimeZone.d.ts'
export class STZInfo extends Object implements Serializable {
    constructor()
    // private ea: boolean;
    // private edm: number;
    // private edw: number;
    // private edwm: number;
    // private em: number;
    // private et: number;
    // private sa: boolean;
    // private sdm: number;
    // private sdw: number;
    // private sdwm: number;
    // private sm: number;
    // private st: number;
    // private sy: number;
    applyTo(stz: SimpleTimeZone): void;
    setEnd(em: number, edwm: number, edw: number, et: number, edm: number, ea: boolean): void;
    setStart(sm: number, sdwm: number, sdw: number, st: number, sdm: number, sa: boolean): void;
}