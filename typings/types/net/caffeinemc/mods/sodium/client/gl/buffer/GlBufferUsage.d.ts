import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GlBufferUsage extends Enum<GlBufferUsage> {
    static DYNAMIC_COPY: GlBufferUsage;
    static DYNAMIC_DRAW: GlBufferUsage;
    static DYNAMIC_READ: GlBufferUsage;
    static STATIC_COPY: GlBufferUsage;
    static STATIC_DRAW: GlBufferUsage;
    static STATIC_READ: GlBufferUsage;
    static STREAM_COPY: GlBufferUsage;
    static STREAM_DRAW: GlBufferUsage;
    static STREAM_READ: GlBufferUsage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlBufferUsage;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "STREAM_DRAW" | "STREAM_READ" | "STREAM_COPY" | "STATIC_DRAW" | "STATIC_READ" | "STATIC_COPY" | "DYNAMIC_DRAW" | "DYNAMIC_READ" | "DYNAMIC_COPY";
}