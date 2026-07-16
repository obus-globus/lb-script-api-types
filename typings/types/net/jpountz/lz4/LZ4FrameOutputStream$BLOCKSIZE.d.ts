import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4FrameOutputStream$BLOCKSIZE extends Enum<LZ4FrameOutputStream$BLOCKSIZE> {
    static SIZE_1MB: LZ4FrameOutputStream$BLOCKSIZE;
    static SIZE_256KB: LZ4FrameOutputStream$BLOCKSIZE;
    static SIZE_4MB: LZ4FrameOutputStream$BLOCKSIZE;
    static SIZE_64KB: LZ4FrameOutputStream$BLOCKSIZE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): LZ4FrameOutputStream$BLOCKSIZE;
    static valueOf(paramarg0: string): LZ4FrameOutputStream$BLOCKSIZE;
    static values(): LZ4FrameOutputStream$BLOCKSIZE[];
    private constructor(arg2: number)
    readonly indicator: number;
    getIndicator(): number;
    name(): "SIZE_64KB" | "SIZE_256KB" | "SIZE_1MB" | "SIZE_4MB";
}