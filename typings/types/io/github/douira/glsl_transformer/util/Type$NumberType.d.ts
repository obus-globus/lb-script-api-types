import type { Type } from '../../../../../io/github/douira/glsl_transformer/util/Type.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Type$NumberType extends Enum<Type$NumberType> {
    static BOOLEAN: Type$NumberType;
    static FLOATING_POINT: Type$NumberType;
    static SIGNED_INTEGER: Type$NumberType;
    static STRING: Type$NumberType;
    static UNSIGNED_INTEGER: Type$NumberType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Type$NumberType;
    static values(): (Object | null)[];
    private constructor(arg2: number, ...arg3: number[])
    readonly maxBitDepth: number;
    readonly maxDimensions: number[];
    readonly registeredTypes: Type[];
    getMaxBitDepth(): number;
    getMaxDimensions(): number[];
    getRegisteredTypes(): Type[];
    name(): "STRING" | "BOOLEAN" | "UNSIGNED_INTEGER" | "SIGNED_INTEGER" | "FLOATING_POINT";
}