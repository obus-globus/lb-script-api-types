import type { Schema } from '../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileAccessProvider } from '../../../../net/minecraft/util/filefix/access/FileAccessProvider.d.ts'
import type { FileFixOperation } from '../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { ModifyContent$FileAccessFunction } from '../../../../net/minecraft/util/filefix/operations/ModifyContent$FileAccessFunction.d.ts'
import type { ModifyContent$FixFunction } from '../../../../net/minecraft/util/filefix/operations/ModifyContent$FixFunction.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export abstract class FileFix extends Object {
    constructor(schema: Schema)
    // private fileFixOperations: FileFixOperation[];
    readonly schema: Schema;
    addFileContentFix(fileAccessFunction: (param0: FileAccessProvider) => (param0: UpgradeProgress) => void): void;
    addFileFixOperation(fileFixOperation: FileFixOperation): void;
    countFileOperations(): number;
    getSchema(): Schema;
    getVersion(): number;
    makeFixer(): void;
    runFixOperations(baseFolder: Path, upgradeProgress: UpgradeProgress): void;
}