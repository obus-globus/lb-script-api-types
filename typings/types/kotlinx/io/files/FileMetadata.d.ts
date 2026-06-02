import type { Object } from '../../../java/lang/Object.d.ts'
export class FileMetadata extends Object {
    constructor(isRegularFile: boolean, isDirectory: boolean, size: number)
    // private isDirectory: boolean;
    /*not mapped: */ isDirectory(): boolean;
    // private isRegularFile: boolean;
    /*not mapped: */ isRegularFile(): boolean;
    readonly size: number;
}