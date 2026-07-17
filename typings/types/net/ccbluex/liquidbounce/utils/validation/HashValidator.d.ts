import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HashValidator extends Object {
    static INSTANCE: HashValidator;
    // private HASH_FILE_NAME: string;
    // private containsHashFile(f: File): boolean;
    // private deleteFolder(folderToDelete: File): void;
    // private shouldDelete(hashFile: File, hashes: JavaMap<string, string>): boolean;
    validateFolder(file: File): void;
    // private validateHashFile(hashFile: File): void;
}