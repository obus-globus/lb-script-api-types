import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAccessProvider } from '../../../../../net/minecraft/util/filefix/access/FileAccessProvider.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { ModifyContent$FixFunction } from '../../../../../net/minecraft/util/filefix/operations/ModifyContent$FixFunction.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class ModifyContent extends Object implements FileFixOperation {
    constructor(fileAccessProvider: FileAccessProvider, fixFunction: (param0: UpgradeProgress) => void)
    // private fileAccessProvider: FileAccessProvider;
    // private fixFunction: (param0: UpgradeProgress) => void;
    fix(baseDirectory: Path[], upgradeProgress: UpgradeProgress): void;
}