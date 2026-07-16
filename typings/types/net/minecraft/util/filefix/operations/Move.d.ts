import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class Move extends Record implements FileFixOperation {
    constructor(from: string, to: string)
    // private from: string;
    // private to: string;
    equals(o: Object | null): boolean;
    fix(baseDirectory: Path, upgradeProgress: UpgradeProgress): void;
    from(): string;
    hashCode(): number;
    relative(sourceFolder: string, targetFolder: string): Move;
    to(): string;
    toString(): string;
}