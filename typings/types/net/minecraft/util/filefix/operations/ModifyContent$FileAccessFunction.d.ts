import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAccessProvider } from '../../../../../net/minecraft/util/filefix/access/FileAccessProvider.d.ts'
import type { ModifyContent$FixFunction } from '../../../../../net/minecraft/util/filefix/operations/ModifyContent$FixFunction.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export interface ModifyContent$FileAccessFunction extends Object {
    make(fileAccessProvider: FileAccessProvider): (param0: UpgradeProgress) => void;
}