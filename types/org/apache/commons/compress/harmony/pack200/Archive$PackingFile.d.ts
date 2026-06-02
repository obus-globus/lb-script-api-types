import type { JarEntry } from '../../../../../../java/util/jar/JarEntry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Archive$PackingFile extends Object {
    constructor(arg0: number[], arg1: JarEntry)
    constructor(arg0: string, arg1: number[], arg2: number)
    readonly contents: number[];
    // private deflateHint: boolean;
    // private isDirectory: boolean;
    readonly modtime: number;
    readonly name: string;
    getContents(): number[];
    getModtime(): number;
    getName(): string;
    isDefalteHint(): boolean;
    isDirectory(): boolean;
    setContents(arg0: number[]): void;
    toString(): string;
}