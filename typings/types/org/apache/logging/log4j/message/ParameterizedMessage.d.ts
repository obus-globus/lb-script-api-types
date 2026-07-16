import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ParameterFormatter$MessagePatternAnalysis } from '../../../../../org/apache/logging/log4j/message/ParameterFormatter$MessagePatternAnalysis.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class ParameterizedMessage extends Object implements Message, StringBuilderFormattable {
    static ERROR_MSG_SEPARATOR: string;
    static ERROR_PREFIX: string;
    static ERROR_SEPARATOR: string;
    static ERROR_SUFFIX: string;
    static RECURSION_PREFIX: string;
    static RECURSION_SUFFIX: string;
    static countArgumentPlaceholders(parampattern: string): number;
    static deepToString(paramo: Object): string;
    static format(parampattern: string, paramargs: Object[]): string;
    static identityToString(paramobj: Object): string;
    constructor(pattern: string, arg: Object)
    constructor(pattern: string, arg0: Object, arg1: Object)
    constructor(pattern: string, ...args: Object[])
    constructor(pattern: string, args: Object[], throwable: Throwable)
    constructor(pattern: string, args: string[], throwable: Throwable)
    // private args: Object[];
    readonly formattedMessage: string;
    // private pattern: string;
    // private patternAnalysis: ParameterFormatter$MessagePatternAnalysis;
    readonly throwable: Throwable;
    equals(object: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}