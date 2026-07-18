import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpConversionUtil$ExtensionHeaderNames extends Enum<HttpConversionUtil$ExtensionHeaderNames> {
    static PATH: HttpConversionUtil$ExtensionHeaderNames;
    static SCHEME: HttpConversionUtil$ExtensionHeaderNames;
    static STREAM_DEPENDENCY_ID: HttpConversionUtil$ExtensionHeaderNames;
    static STREAM_ID: HttpConversionUtil$ExtensionHeaderNames;
    static STREAM_PROMISE_ID: HttpConversionUtil$ExtensionHeaderNames;
    static STREAM_WEIGHT: HttpConversionUtil$ExtensionHeaderNames;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpConversionUtil$ExtensionHeaderNames;
    static values(): HttpConversionUtil$ExtensionHeaderNames[];
    private constructor(arg2: string)
    // private text: AsciiString;
    text(): AsciiString;
    name(): "STREAM_ID" | "SCHEME" | "PATH" | "STREAM_PROMISE_ID" | "STREAM_DEPENDENCY_ID" | "STREAM_WEIGHT";
}