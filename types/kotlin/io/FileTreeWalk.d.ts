import type { File } from '../../java/io/File.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { FileWalkDirection } from '../../kotlin/io/FileWalkDirection.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class FileTreeWalk extends Object implements Sequence<File> {
    constructor(start: File, direction: FileWalkDirection)
    private constructor(start: File, direction: FileWalkDirection, onEnter: Function1<File, boolean> | null, onLeave: Function1<File, void> | null, onFail: Function2<File, IOException, void> | null, maxDepth: number)
    // private direction: FileWalkDirection;
    // private maxDepth: number;
    // private onEnter: (param0: File) => boolean;
    // private onFail: (param0: File, param1: IOException) => void;
    // private onLeave: (param0: File) => void;
    // private start: File;
    iterator(): Iterator<File>;
    maxDepth(depth: number): FileTreeWalk;
    onEnter(function_: Function1<File, boolean>): FileTreeWalk;
    onFail(function_: Function2<File, IOException, void>): FileTreeWalk;
    onLeave(function_: Function1<File, void>): FileTreeWalk;
}