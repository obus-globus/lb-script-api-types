import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTestFunction } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTestFunction.d.ts'
export class AlphaTest extends Record {
    static ALWAYS: AlphaTest;
    // private function: AlphaTestFunction;
    // private reference: number;
    equals(arg0: Object | null): boolean;
    function(): AlphaTestFunction;
    hashCode(): number;
    reference(): number;
    toExpression(arg0: string): string;
    toExpression(arg0: string, arg1: string, arg2: string): string;
    toString(): string;
}