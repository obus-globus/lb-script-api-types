import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GlBufferTarget extends Enum<GlBufferTarget> {
    static ARRAY_BUFFER: GlBufferTarget;
    static COPY_READ_BUFFER: GlBufferTarget;
    static COPY_WRITE_BUFFER: GlBufferTarget;
    static COUNT: number;
    static ELEMENT_BUFFER: GlBufferTarget;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlBufferTarget;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private binding: number;
    // private target: number;
    getBindingParameter(): number;
    getTargetParameter(): number;
    name(): "ARRAY_BUFFER" | "ELEMENT_BUFFER" | "COPY_READ_BUFFER" | "COPY_WRITE_BUFFER";
}