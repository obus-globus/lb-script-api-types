import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class XXHash32 extends Object implements Checksum {
    constructor()
    constructor(arg0: number)
    // private buffer: number[];
    // private oneByte: number[];
    // private pos: number;
    // private seed: number;
    // private state: number[];
    // private stateUpdated: boolean;
    // private totalLen: number;
    getValue(): number;
    // private initializeState(): void;
    // private process(arg0: number[], arg1: number): void;
    reset(): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
}