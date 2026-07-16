import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileMove } from '../../../../net/minecraft/util/filefix/virtualfilesystem/FileMove.d.ts'
export class FileFixerUpper$UpgradeInProgress extends Record {
    static codec(paramfromDirectory: Path, paramtoDirectory: Path): Codec<FileFixerUpper$UpgradeInProgress>;
    constructor(moves: FileMove[])
    // private moves: FileMove[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    moves(): FileMove[];
    toString(): string;
}