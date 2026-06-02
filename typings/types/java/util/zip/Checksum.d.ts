import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Checksum extends Object{
    getValue(): number;
    reset(): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
}