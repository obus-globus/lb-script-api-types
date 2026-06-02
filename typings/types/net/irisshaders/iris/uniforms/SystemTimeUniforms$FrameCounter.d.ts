import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SystemTimeUniforms$FrameCounter extends Object implements IntSupplier {
    private constructor()
    // private count: number;
    beginFrame(): void;
    getAsInt(): number;
    reset(): void;
}