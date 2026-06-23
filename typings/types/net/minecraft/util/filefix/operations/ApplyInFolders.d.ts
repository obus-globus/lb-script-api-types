import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileRelation } from '../../../../../net/minecraft/util/filefix/access/FileRelation.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class ApplyInFolders extends Record implements FileFixOperation {
    constructor(folders: (param0: Path[][]) => Path[][][], fileFixOperations: FileFixOperation[])
    // private fileFixOperations: FileFixOperation[];
    // private folders: (param0: Path[][]) => Path[][][];
    equals(o: Object | null): boolean;
    fileFixOperations(): FileFixOperation[];
    fix(baseDirectory: Path[], upgradeProgress: UpgradeProgress): void;
    folders(): (param0: Path[][]) => Path[][][];
    hashCode(): number;
    toString(): string;
}