import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ELFAnalyser extends Object {
    static analyse(paramarg0: string): ELFAnalyser;
    private constructor(arg0: string)
    readonly ELF: boolean;
    // private _64Bit: boolean;
    readonly arm: boolean;
    readonly armEabiAapcsVfp: boolean;
    readonly armHardFloatFlag: boolean;
    readonly armSoftFloatFlag: boolean;
    readonly bigEndian: boolean;
    readonly filename: string;
    getFilename(): string;
    is64Bit(): boolean;
    isArm(): boolean;
    isArmEabiAapcsVfp(): boolean;
    isArmHardFloat(): boolean;
    isArmHardFloatFlag(): boolean;
    isArmSoftFloatFlag(): boolean;
    isBigEndian(): boolean;
    isELF(): boolean;
    // private parseEabiAapcsVfp(arg0: ByteBuffer, arg1: RandomAccessFile): void;
    // private runDetection(): void;
}