import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AlphaTestFunction extends Enum<AlphaTestFunction> {
    static ALWAYS: AlphaTestFunction;
    static EQUAL: AlphaTestFunction;
    static GEQUAL: AlphaTestFunction;
    static GREATER: AlphaTestFunction;
    static LEQUAL: AlphaTestFunction;
    static LESS: AlphaTestFunction;
    static NEVER: AlphaTestFunction;
    static NOTEQUAL: AlphaTestFunction;
    static fromGlId(paramarg0: number): Optional<AlphaTestFunction>;
    static fromString(paramarg0: string): Optional<AlphaTestFunction>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AlphaTestFunction;
    static values(): AlphaTestFunction[];
    private constructor(arg2: number, arg3: string)
    readonly expression: string;
    readonly glId: number;
    getExpression(): string;
    getGlId(): number;
    name(): "NEVER" | "LESS" | "EQUAL" | "LEQUAL" | "GREATER" | "NOTEQUAL" | "GEQUAL" | "ALWAYS";
}