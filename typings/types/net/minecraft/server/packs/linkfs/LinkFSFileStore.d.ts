import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileAttributeView } from '../../../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { FileStoreAttributeView } from '../../../../../java/nio/file/attribute/FileStoreAttributeView.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LinkFSFileStore extends FileStore {
    constructor(name: string)
    // private name: string;
    getAttribute(attribute: string): Object;
    getFileStoreAttributeView<V extends FileStoreAttributeView>(type: Class<V>): V;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
    name(): string;
    supportsFileAttributeView(type: Class<FileAttributeView>): boolean;
    supportsFileAttributeView(name: string): boolean;
    type(): string;
}