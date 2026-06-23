import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LinkFileSystem$DirectoryEntry } from '../../../../../net/minecraft/server/packs/linkfs/LinkFileSystem$DirectoryEntry.d.ts'
export class LinkFileSystem$Builder extends Object {
    constructor()
    // private root: LinkFileSystem$DirectoryEntry;
    build(name: string): FileSystem;
    put(path: string[], target: Path[]): LinkFileSystem$Builder;
    put(path: string[], name: string, target: Path[]): LinkFileSystem$Builder;
}