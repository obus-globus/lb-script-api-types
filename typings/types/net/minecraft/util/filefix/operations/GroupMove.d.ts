import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { Move } from '../../../../../net/minecraft/util/filefix/operations/Move.d.ts'
import type { UpgradeProgress } from '../../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
export class GroupMove extends Record implements FileFixOperation {
    constructor(fromTo: JavaMap<string, string>, fixers: Move[])
    // private fixers: Move[];
    // private fromTo: JavaMap<string, string>;
    equals(o: Object | null): boolean;
    fix(baseDirectory: Path, upgradeProgress: UpgradeProgress): void;
    fixers(): Move[];
    fromTo(): JavaMap<string, string>;
    hashCode(): number;
    toString(): string;
}