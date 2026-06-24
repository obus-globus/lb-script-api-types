import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlTransientMemory$PersistentMapping$Rotation extends Record implements Runnable {
    private constructor(staging: () => void, gpu: () => void, gpuMapped: () => void)
    // private gpu: () => void;
    // private gpuMapped: () => void;
    // private staging: () => void;
    equals(o: Object | null): boolean;
    gpu(): () => void;
    gpuMapped(): () => void;
    hashCode(): number;
    run(): void;
    staging(): () => void;
    toString(): string;
}