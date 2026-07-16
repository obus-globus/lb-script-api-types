import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GpuSurface$PresentMode extends Enum<GpuSurface$PresentMode> {
    static FIFO: GpuSurface$PresentMode;
    static FIFO_RELAXED: GpuSurface$PresentMode;
    static IMMEDIATE: GpuSurface$PresentMode;
    static MAILBOX: GpuSurface$PresentMode;
    static getSupportedVsyncMode(paramsupportedModes: GpuSurface$PresentMode[], paramvsync: boolean): GpuSurface$PresentMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GpuSurface$PresentMode;
    static values(): GpuSurface$PresentMode[];
    private constructor()
    name(): "IMMEDIATE" | "MAILBOX" | "FIFO" | "FIFO_RELAXED";
}