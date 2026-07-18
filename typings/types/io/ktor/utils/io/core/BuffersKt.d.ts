import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../../kotlinx/io/Buffer.d.ts'
export class BuffersKt extends Object {
    static isEmpty(self: Buffer): boolean;
    static readBytes(self: Buffer, count: number): number[];
}