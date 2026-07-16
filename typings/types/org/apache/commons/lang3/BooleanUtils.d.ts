import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BooleanUtils extends Object {
    static FALSE: string;
    static NO: string;
    static OFF: string;
    static ON: string;
    static TRUE: string;
    static YES: string;
    static and(...paramarg0: boolean[]): boolean;
    static booleanValues(): boolean[];
    static compare(paramarg0: boolean, paramarg1: boolean): number;
    static forEach(paramarg0: (param0: boolean) => void): void;
    static isFalse(paramarg0: boolean): boolean;
    static isNotFalse(paramarg0: boolean): boolean;
    static isNotTrue(paramarg0: boolean): boolean;
    static isTrue(paramarg0: boolean): boolean;
    static negate(paramarg0: boolean): boolean;
    static oneHot(...paramarg0: boolean[]): boolean;
    static or(...paramarg0: boolean[]): boolean;
    static primitiveValues(): boolean[];
    static toBoolean(paramarg0: number): boolean;
    static toBoolean(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static toBoolean(paramarg0: boolean): boolean;
    static toBoolean(paramarg0: string): boolean;
    static toBoolean(paramarg0: string, paramarg1: string, paramarg2: string): boolean;
    static toBooleanDefaultIfNull(paramarg0: boolean, paramarg1: boolean): boolean;
    static toBooleanObject(paramarg0: number): boolean;
    static toBooleanObject(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static toBooleanObject(paramarg0: string): boolean;
    static toBooleanObject(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): boolean;
    static toInteger(paramarg0: boolean): number;
    static toInteger(paramarg0: boolean, paramarg1: number, paramarg2: number): number;
    static toInteger(paramarg0: boolean, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static toIntegerObject(paramarg0: boolean): number;
    static toIntegerObject(paramarg0: boolean, paramarg1: number, paramarg2: number): number;
    static toIntegerObject(paramarg0: boolean, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static toString(paramarg0: boolean, paramarg1: string, paramarg2: string): string;
    static toString(paramarg0: boolean, paramarg1: string, paramarg2: string, paramarg3: string): string;
    static toStringOnOff(paramarg0: boolean): string;
    static toStringTrueFalse(paramarg0: boolean): string;
    static toStringYesNo(paramarg0: boolean): string;
    static values(): boolean[];
    static xor(...paramarg0: boolean[]): boolean;
    constructor()
}