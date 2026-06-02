import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class RegexMove extends Record implements FileFixOperation {
    constructor(fromPattern: Pattern, toReplacement: string)
    constructor(fromPattern: string, toPattern: string)
    // private fromPattern: Pattern;
    // private toReplacement: string;
    equals(o: Object | null): boolean;
    fix(baseDirectory: Path[], upgradeProgress: UpgradeProgress): void;
    fromPattern(): Pattern;
    hashCode(): number;
    toReplacement(): string;
    toString(): string;
}