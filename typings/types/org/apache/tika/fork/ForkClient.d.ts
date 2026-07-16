import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ForkResource } from '../../../../org/apache/tika/fork/ForkResource.d.ts'
import type { ParserFactoryFactory } from '../../../../org/apache/tika/fork/ParserFactoryFactory.d.ts'
import type { TimeoutLimits } from '../../../../org/apache/tika/fork/TimeoutLimits.d.ts'
export class ForkClient extends Object {
    constructor(arg0: ClassLoader, arg1: Object, arg2: string[], arg3: TimeoutLimits)
    constructor(arg0: Path, arg1: ParserFactoryFactory, arg2: ClassLoader, arg3: string[], arg4: TimeoutLimits)
    constructor(arg0: Path, arg1: ParserFactoryFactory, arg2: string[], arg3: TimeoutLimits)
    readonly filesProcessed: number;
    readonly id: number;
    // private input: DataInputStream;
    // private jar: File;
    // private loader: ClassLoader;
    // private output: DataOutputStream;
    // private process: Process;
    // private resources: ForkResource[];
    call(arg0: string, ...arg1: Object[]): Throwable;
    close(): void;
    getFilesProcessed(): number;
    getId(): number;
    ping(): boolean;
    // private sendObject(arg0: Object, arg1: ForkResource[]): void;
    // private waitForResponse(arg0: ForkResource[]): Throwable;
    // private waitForStartBeacon(): void;
}