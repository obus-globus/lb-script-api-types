import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GlPrimitiveType extends Enum<GlPrimitiveType> {
    static LINES: GlPrimitiveType;
    static PATCHES: GlPrimitiveType;
    static POINTS: GlPrimitiveType;
    static TRIANGLES: GlPrimitiveType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlPrimitiveType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "POINTS" | "LINES" | "TRIANGLES" | "PATCHES";
}