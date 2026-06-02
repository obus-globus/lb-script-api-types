import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface ObjectProperty extends Object{
    constant(): boolean;
    value(): Value;
}