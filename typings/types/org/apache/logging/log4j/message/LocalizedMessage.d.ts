import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { LoggerNameAwareMessage } from '../../../../../org/apache/logging/log4j/message/LoggerNameAwareMessage.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StatusLogger } from '../../../../../org/apache/logging/log4j/status/StatusLogger.d.ts'
export class LocalizedMessage extends Object implements LoggerNameAwareMessage, Message {
    constructor(locale: Locale, key: string, arg: Object)
    constructor(locale: Locale, key: string, arg1: Object, arg2: Object)
    constructor(locale: Locale, key: string, arguments: Object[])
    constructor(bundle: ResourceBundle, locale: Locale, key: string, arg: Object)
    constructor(bundle: ResourceBundle, locale: Locale, key: string, arg1: Object, arg2: Object)
    constructor(bundle: ResourceBundle, locale: Locale, key: string, arguments: Object[])
    constructor(bundle: ResourceBundle, key: string)
    constructor(bundle: ResourceBundle, key: string, arg: Object)
    constructor(bundle: ResourceBundle, key: string, arg1: Object, arg2: Object)
    constructor(bundle: ResourceBundle, key: string, arguments: Object[])
    constructor(baseName: string, locale: Locale, key: string, arg: Object)
    constructor(baseName: string, locale: Locale, key: string, arg1: Object, arg2: Object)
    constructor(baseName: string, locale: Locale, key: string, arguments: Object[])
    constructor(messagePattern: string, arg: Object)
    constructor(messagePattern: string, arg1: Object, arg2: Object)
    constructor(messagePattern: string, arguments: Object[])
    constructor(baseName: string, key: string, arg: Object)
    constructor(baseName: string, key: string, arg1: Object, arg2: Object)
    constructor(baseName: string, key: string, arguments: Object[])
    // private argArray: Object[];
    // private baseName: string;
    readonly formattedMessage: string;
    // private key: string;
    // private locale: Locale;
    // private logger: StatusLogger;
    readonly loggerName: string;
    // private resourceBundle: ResourceBundle;
    // private stringArgs: string[];
    readonly throwable: Throwable;
    getFormat(): string;
    getFormat(): string;
    getFormattedMessage(): string;
    getLoggerName(): string;
    getParameters(): Object[];
    getResourceBundle(rbBaseName: string, resourceBundleLocale: Locale, loop: boolean): ResourceBundle;
    getThrowable(): Throwable;
    // private readObject(in_: ObjectInputStream): void;
    setLoggerName(name: string): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}