import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FileSystemPaths extends Object{
    getPath(first: string, ...more: string[]): Path;
}