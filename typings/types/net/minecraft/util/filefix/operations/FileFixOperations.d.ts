import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileRelation } from '../../../../../net/minecraft/util/filefix/access/FileRelation.d.ts'
import type { ApplyInFolders } from '../../../../../net/minecraft/util/filefix/operations/ApplyInFolders.d.ts'
import type { DeleteFileOrEmptyDirectory } from '../../../../../net/minecraft/util/filefix/operations/DeleteFileOrEmptyDirectory.d.ts'
import type { FileFixOperation } from '../../../../../net/minecraft/util/filefix/operations/FileFixOperation.d.ts'
import type { GroupMove } from '../../../../../net/minecraft/util/filefix/operations/GroupMove.d.ts'
import type { Move } from '../../../../../net/minecraft/util/filefix/operations/Move.d.ts'
import type { RegexMove } from '../../../../../net/minecraft/util/filefix/operations/RegexMove.d.ts'
export class FileFixOperations extends Object {
    static applyInFolders(paramapplicableFolders: (param0: Path) => Path[], paramoperations: FileFixOperation[]): ApplyInFolders;
    static delete(paramtarget: string): DeleteFileOrEmptyDirectory;
    static groupMove(paramdata: { [key: string]: string }, parammove: Move[]): GroupMove;
    static move(paramfrom: string, paramto: string): Move;
    static moveRegex(paramfilePattern: string, paramreplacePattern: string): RegexMove;
    static moveSimple(paramfile: string): Move;
    constructor()
}