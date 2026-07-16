import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FramedLZ4CompressorOutputStream$BlockSize extends Enum<FramedLZ4CompressorOutputStream$BlockSize> {
    static K256: FramedLZ4CompressorOutputStream$BlockSize;
    static K64: FramedLZ4CompressorOutputStream$BlockSize;
    static M1: FramedLZ4CompressorOutputStream$BlockSize;
    static M4: FramedLZ4CompressorOutputStream$BlockSize;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FramedLZ4CompressorOutputStream$BlockSize;
    static values(): FramedLZ4CompressorOutputStream$BlockSize[];
    private constructor(arg2: number, arg3: number)
    // private index: number;
    // private size: number;
    getIndex(): number;
    getSize(): number;
    name(): "K64" | "K256" | "M1" | "M4";
}