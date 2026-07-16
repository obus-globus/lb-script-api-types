import type { Object } from '../../java/lang/Object.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
export class IsProbablyUtf8Kt extends Object {
    static isProbablyUtf8(self: BufferedSource, codePointLimit: number): boolean;
}