import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PathAllowList$EntryType extends Object{
    compile(fileSystem: FileSystem, pattern: string): (param0: Path[][]) => kotlin.Boolean;
}