import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeflateParameters extends Object {
    constructor()
    readonly compressionLevel: number;
    // private zlibHeader: boolean;
    getCompressionLevel(): number;
    setCompressionLevel(arg0: number): void;
    setWithZlibHeader(arg0: boolean): void;
    withZlibHeader(): boolean;
}