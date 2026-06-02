import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
export class StatusConfiguration extends Object {
    constructor()
    // private initialized: boolean;
    // private level: Level;
    // private lock: Lock;
    // private output: PrintStream;
    error(message: string): void;
    initialize(): void;
    withDestination(destination: string): StatusConfiguration;
    withStatus(level: string): StatusConfiguration;
    withStatus(level: Level): StatusConfiguration;
    withVerboseClasses(verboseClasses: string[]): StatusConfiguration;
    withVerbosity(verbosity: string): StatusConfiguration;
}