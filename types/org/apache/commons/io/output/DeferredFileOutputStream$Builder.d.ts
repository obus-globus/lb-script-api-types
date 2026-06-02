import type { File } from '../../../../../java/io/File.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { DeferredFileOutputStream } from '../../../../../org/apache/commons/io/output/DeferredFileOutputStream.d.ts'
export class DeferredFileOutputStream$Builder extends AbstractStreamBuilder<DeferredFileOutputStream, DeferredFileOutputStream$Builder> {
    constructor()
    // private directory: Path[];
    // private outputFile: Path[];
    // private prefix: string;
    // private suffix: string;
    // private threshold: number;
    get(): DeferredFileOutputStream;
    setDirectory(arg0: File): DeferredFileOutputStream$Builder;
    setDirectory(arg0: Path[]): DeferredFileOutputStream$Builder;
    setOutputFile(arg0: File): DeferredFileOutputStream$Builder;
    setOutputFile(arg0: Path[]): DeferredFileOutputStream$Builder;
    setPrefix(arg0: string): DeferredFileOutputStream$Builder;
    setSuffix(arg0: string): DeferredFileOutputStream$Builder;
    setThreshold(arg0: number): DeferredFileOutputStream$Builder;
}