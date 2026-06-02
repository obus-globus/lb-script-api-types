import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { ResourceBundle } from '../../../java/util/ResourceBundle.d.ts'
import type { Level } from '../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LogRecord extends Object implements Serializable {
    constructor(arg0: Level, arg1: string)
    readonly instant: Instant;
    readonly level: Level;
    readonly loggerName: string;
    readonly longThreadID: number;
    readonly message: string;
    // private needToInferCaller: boolean;
    readonly parameters: Object[];
    readonly resourceBundle: ResourceBundle;
    readonly resourceBundleName: string;
    readonly sequenceNumber: number;
    readonly sourceClassName: string;
    readonly sourceMethodName: string;
    readonly threadID: number;
    readonly thrown: Throwable;
    getInstant(): Instant;
    getLevel(): Level;
    getLoggerName(): string;
    getLongThreadID(): number;
    getMessage(): string;
    getMillis(): number;
    getParameters(): Object[];
    getResourceBundle(): ResourceBundle;
    getResourceBundleName(): string;
    getSequenceNumber(): number;
    getSourceClassName(): string;
    getSourceMethodName(): string;
    getThreadID(): number;
    getThrown(): Throwable;
    // private inferCaller(): void;
    // private readObject(arg0: ObjectInputStream): void;
    setInstant(arg0: Instant): void;
    setLevel(arg0: Level): void;
    setLoggerName(arg0: string): void;
    setLongThreadID(arg0: number): LogRecord;
    setMessage(arg0: string): void;
    setMillis(arg0: number): void;
    setParameters(arg0: Object[]): void;
    setResourceBundle(arg0: ResourceBundle): void;
    setResourceBundleName(arg0: string): void;
    setSequenceNumber(arg0: number): void;
    setSourceClassName(arg0: string): void;
    setSourceMethodName(arg0: string): void;
    setThreadID(arg0: number): void;
    setThrown(arg0: Throwable): void;
    // private shortThreadID(arg0: number): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}