import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Readable extends Object{
    read(arg0: CharBuffer): number;
}