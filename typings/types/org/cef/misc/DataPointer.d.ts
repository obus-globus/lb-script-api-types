import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataPointer extends Object {
    constructor(arg0: number)
    readonly address: number;
    // private alignment: number;
    // private dataBuffer: ByteBuffer;
    // private initialized: boolean;
    forCapacity(arg0: number): DataPointer;
    getAddress(): number;
    getByte(arg0: number): number;
    getData(arg0: number): DataPointer;
    getDouble(arg0: number): number;
    getFloat(arg0: number): number;
    getInt(arg0: number): number;
    getLong(arg0: number): number;
    getShort(arg0: number): number;
    withAlignment(arg0: number): DataPointer;
}