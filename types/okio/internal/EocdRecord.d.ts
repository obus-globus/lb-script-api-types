import type { Object } from '../../java/lang/Object.d.ts'
export class EocdRecord extends Object {
    constructor(entryCount: number, centralDirectoryOffset: number, commentByteCount: number)
    readonly centralDirectoryOffset: number;
    readonly commentByteCount: number;
    readonly entryCount: number;
}