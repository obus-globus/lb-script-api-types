import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
import type { Timer$Status } from '../../../../../org/apache/logging/log4j/util/Timer$Status.d.ts'
export class Timer extends Object implements Serializable, StringBuilderFormattable {
    constructor(name: string)
    constructor(name: string, iterations: number)
    readonly elapsedTime: number;
    // private iterations: number;
    readonly name: string;
    // private startTime: ThreadLocal<number>;
    readonly status: Timer$Status;
    equals(o: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    getElapsedNanoTime(): number;
    getElapsedTime(): number;
    getName(): string;
    getStatus(): Timer$Status;
    hashCode(): number;
    pause(): void;
    resume(): void;
    start(): void;
    startOrResume(): void;
    stop(): string;
    toString(): string;
}