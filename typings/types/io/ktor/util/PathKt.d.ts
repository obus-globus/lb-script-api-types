import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PathKt extends Object {
    static combineSafe(self: File, relativePath: string): File;
    static dropLeadingTopDirs(path: string): number;
    static normalizeAndRelativize(self: File): File;
}