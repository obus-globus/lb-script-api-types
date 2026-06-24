import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlTransientMemory$Fallback$GlAllocation extends Record {
    private constructor(glBuffer: GlBuffer, hostBuffer: number)
    // private glBuffer: GlBuffer;
    // private hostBuffer: number;
    equals(o: Object | null): boolean;
    glBuffer(): GlBuffer;
    hashCode(): number;
    hostBuffer(): number;
    toString(): string;
}