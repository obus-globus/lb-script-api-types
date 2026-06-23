import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { LockableFileWriter } from '../../../../../org/apache/commons/io/output/LockableFileWriter.d.ts'
export class LockableFileWriter$Builder extends AbstractStreamBuilder<LockableFileWriter, LockableFileWriter$Builder> {
    constructor()
    // private append: boolean;
    // private lockDirectory: AbstractOrigin<Object, any>;
    // private checkOriginFile(): File;
    get(): LockableFileWriter;
    setAppend(arg0: boolean): LockableFileWriter$Builder;
    setLockDirectory(arg0: File): LockableFileWriter$Builder;
    setLockDirectory(arg0: string): LockableFileWriter$Builder;
}