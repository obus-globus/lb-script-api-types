import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoaderUtil extends Object {
    static getClassFileName(paramarg0: string): string;
    static hasAwtSupport(): boolean;
    static hasMacOs(): boolean;
    static normalizeExistingPath(paramarg0: Path[][]): Path[][];
    static normalizePath(paramarg0: Path[][]): Path[][];
    static verifyClasspath(): void;
    static verifyNotInTargetCl(paramarg0: Class<Object>): void;
    constructor()
}