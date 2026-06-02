import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileNameUtil extends Object {
    constructor(arg0: { [key: string]: string }, arg1: string)
    // private compressSuffix: { [key: string]: string };
    // private defaultExtension: string;
    // private longestCompressedSuffix: number;
    // private longestUncompressedSuffix: number;
    // private shortestCompressedSuffix: number;
    // private shortestUncompressedSuffix: number;
    // private uncompressSuffix: { [key: string]: string };
    getCompressedFileName(arg0: string): string;
    getCompressedFilename(arg0: string): string;
    getUncompressedFileName(arg0: string): string;
    getUncompressedFilename(arg0: string): string;
    isCompressedFileName(arg0: string): boolean;
    isCompressedFilename(arg0: string): boolean;
}