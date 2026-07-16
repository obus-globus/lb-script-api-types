import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LiteralExpression$IntegerFormat extends Enum<LiteralExpression$IntegerFormat> {
    static DECIMAL: LiteralExpression$IntegerFormat;
    static HEXADECIMAL: LiteralExpression$IntegerFormat;
    static OCTAL: LiteralExpression$IntegerFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LiteralExpression$IntegerFormat;
    static values(): LiteralExpression$IntegerFormat[];
    private constructor(arg2: number)
    radix: number;
    name(): "DECIMAL" | "HEXADECIMAL" | "OCTAL";
}