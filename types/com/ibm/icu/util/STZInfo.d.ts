import type { SimpleTimeZone } from '../../../../com/ibm/icu/util/SimpleTimeZone.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    applyTo(arg0: SimpleTimeZone): void;
    setEnd(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    setStart(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
}