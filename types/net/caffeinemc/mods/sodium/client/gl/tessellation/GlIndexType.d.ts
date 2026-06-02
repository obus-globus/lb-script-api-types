import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GlIndexType extends Enum<GlIndexType> {
    static UNSIGNED_BYTE: GlIndexType;
    static UNSIGNED_INT: GlIndexType;
    static UNSIGNED_SHORT: GlIndexType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlIndexType;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private id: number;
    readonly stride: number;
    getFormatId(): number;
    getStride(): number;
    name(): "UNSIGNED_BYTE" | "UNSIGNED_SHORT" | "UNSIGNED_INT";
}