import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StreamGobbler extends Object implements Runnable {
    constructor(arg0: InputStream, arg1: number)
    // private is: InputStream;
    isTruncated: boolean;
    lines: string[];
    // private maxBufferLength: number;
    streamLength: number;
    getIsTruncated(): boolean;
    getLines(): string[];
    getStreamLength(): number;
    run(): void;
}