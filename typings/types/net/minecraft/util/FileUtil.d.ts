import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FileUtil extends Object {
    static createDirectoriesSafe(paramdir: Path[][]): void;
    static decomposePath(parampath: string): DataResult<string[]>;
    static findAvailableName(parambaseDir: Path[][], parambaseName: string, paramsuffix: string): string;
    static getFullResourcePath(paramfilename: string): string;
    static isPathPartPortable(paramname: string): boolean;
    static isPathPortable(parampath: Path[][]): boolean;
    static isValidPathSegment(paramsegment: string): boolean;
    static normalizeResourcePath(paramfilename: string): string;
    static resolvePath(paramroot: Path[][], paramsegments: string[]): Path[][];
    static sanitizeName(parambaseName: string): string;
    static validatePath(parampath: (Object | null)[]): void;
    constructor()
}