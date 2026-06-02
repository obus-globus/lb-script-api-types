import type { Base64Variant$PaddingReadBehaviour } from '../../../../../../com/azure/json/implementation/jackson/core/Base64Variant$PaddingReadBehaviour.d.ts'
import type { ByteArrayBuilder } from '../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Base64Variant extends Object implements Serializable {
    static BASE64_VALUE_INVALID: number;
    static BASE64_VALUE_PADDING: number;
    private constructor(arg0: Base64Variant, arg1: Base64Variant$PaddingReadBehaviour)
    private constructor(arg0: Base64Variant, arg1: string, arg2: boolean, arg3: string, arg4: Base64Variant$PaddingReadBehaviour, arg5: number)
    constructor(arg0: Base64Variant, arg1: string, arg2: boolean, arg3: string, arg4: number)
    constructor(arg0: Base64Variant, arg1: string, arg2: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: number)
    // private _asciiToBase64: number[];
    // private _base64ToAsciiB: number[];
    // private _base64ToAsciiC: string[];
    // private _maxLineLength: number;
    // private _name: string;
    // private _paddingChar: string;
    // private _paddingReadBehaviour: Base64Variant$PaddingReadBehaviour;
    // private _writePadding: boolean;
    // private _reportBase64EOF(): void;
    // private _reportBase64UnexpectedPadding(): void;
    // private _reportInvalidBase64(arg0: string, arg1: number, arg2: string): void;
    acceptsPaddingOnRead(): boolean;
    decode(arg0: string): number[];
    decode(arg0: string, arg1: ByteArrayBuilder): void;
    decodeBase64Char(arg0: string): number;
    decodeBase64Char(arg0: number): number;
    encodeBase64Chunk(arg0: number, arg1: number[], arg2: number): number;
    encodeBase64Chunk(arg0: number, arg1: string[], arg2: number): number;
    encodeBase64Partial(arg0: number, arg1: number, arg2: number[], arg3: number): number;
    encodeBase64Partial(arg0: number, arg1: number, arg2: string[], arg3: number): number;
    equals(arg0: Object | null): boolean;
    getMaxLineLength(): number;
    getName(): string;
    getPaddingChar(): string;
    hashCode(): number;
    missingPaddingMessage(): string;
    // private readResolve(): Object;
    requiresPaddingOnRead(): boolean;
    toString(): string;
    // private unexpectedPaddingMessage(): string;
    usesPadding(): boolean;
    usesPaddingChar(arg0: string): boolean;
    usesPaddingChar(arg0: number): boolean;
    withPaddingAllowed(): Base64Variant;
    withPaddingForbidden(): Base64Variant;
    withPaddingRequired(): Base64Variant;
    withReadPadding(arg0: Base64Variant$PaddingReadBehaviour): Base64Variant;
    withWritePadding(arg0: boolean): Base64Variant;
}