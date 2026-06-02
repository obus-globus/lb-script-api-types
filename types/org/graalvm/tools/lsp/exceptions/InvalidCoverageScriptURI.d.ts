import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { InvalidPathException } from '../../../../../java/nio/file/InvalidPathException.d.ts'
export class InvalidCoverageScriptURI extends Exception {
    constructor(cause: InvalidPathException, offset: number, length: number)
    constructor(offset: number, reason: string, length: number)
    readonly index: number;
    readonly length: number;
    readonly reason: string;
    getIndex(): number;
    getLength(): number;
    getReason(): string;
}