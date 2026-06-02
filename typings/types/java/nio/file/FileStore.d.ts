import type { Class } from '../../../java/lang/Class.d.ts'
import type { FileAttributeView } from '../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { FileStoreAttributeView } from '../../../java/nio/file/attribute/FileStoreAttributeView.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class FileStore extends Object {
    constructor()
    getAttribute(arg0: string): Object;
    getBlockSize(): number;
    getFileStoreAttributeView<V extends FileStoreAttributeView>(arg0: Class<V>): V;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
    name(): string;
    supportsFileAttributeView(arg0: Class<FileAttributeView>): boolean;
    supportsFileAttributeView(arg0: string): boolean;
    type(): string;
}