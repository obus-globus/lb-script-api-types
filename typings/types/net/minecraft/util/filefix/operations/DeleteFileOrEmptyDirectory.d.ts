import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class DeleteFileOrEmptyDirectory extends Record implements FileFixOperation {
    constructor(target: string)
    // private target: string;
    equals(o: Object | null): boolean;
    fix(baseDirectory: Path, upgradeProgress: UpgradeProgress): void;
    hashCode(): number;
    target(): string;
    toString(): string;
}