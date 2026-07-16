import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export interface FileFixOperation extends Object{
    fix(baseDirectory: Path, upgradeProgress: UpgradeProgress): void;
}