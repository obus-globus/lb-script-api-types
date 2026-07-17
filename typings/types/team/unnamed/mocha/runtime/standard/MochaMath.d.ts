import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectProperty } from '../../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { ObjectValue } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue.d.ts'
import type { ObjectValue$DoubleFunction1 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction1.d.ts'
import type { ObjectValue$DoubleFunction2 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction2.d.ts'
import type { ObjectValue$DoubleFunction3 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction3.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class MochaMath extends Object implements ObjectValue {
    static PI: number;
    static acos(paramarg0: number): number;
    static asin(paramarg0: number): number;
    static atan(paramarg0: number): number;
    static atan2(paramarg0: number, paramarg1: number): number;
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static cos(paramarg0: number): number;
    static dieRoll(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static dieRollInteger(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static hermiteBlend(paramarg0: number): number;
    static lerp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lerpRotate(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static minAngle(paramarg0: number): number;
    static mod(paramarg0: number, paramarg1: number): number;
    static random(paramarg0: number, paramarg1: number): number;
    static randomInteger(paramarg0: number, paramarg1: number): number;
    static sin(paramarg0: number): number;
    static trunc(paramarg0: number): number;
    constructor()
    // private entries: JavaMap<string, ObjectProperty>;
    entries(): JavaMap<string, ObjectProperty>;
    get(arg0: string): Value;
    getProperty(arg0: string): ObjectProperty;
    set(arg0: string, arg1: Value): boolean;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction1): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction2): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction3): void;
}