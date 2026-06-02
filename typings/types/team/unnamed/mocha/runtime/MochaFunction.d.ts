import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MochaCompiledFunction } from '../../../../team/unnamed/mocha/runtime/compiled/MochaCompiledFunction.d.ts'
export interface MochaFunction extends Object, MochaCompiledFunction{
    evaluate(): number;
}