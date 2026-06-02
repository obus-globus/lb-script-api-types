import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedInputStream$RefillCallback } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream$RefillCallback.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
export class CodedInputStream extends Object {
    static decodeZigZag32(paramarg0: number): number;
    static decodeZigZag64(paramarg0: number): number;
    static newInstance(paramarg0: InputStream): CodedInputStream;
    static readRawVarint32(paramarg0: number, paramarg1: InputStream): number;
    private constructor(arg0: InputStream)
    private constructor(arg0: (Object | null)[])
    // private buffer: number[];
    // private bufferIsImmutable: boolean;
    // private bufferPos: number;
    // private bufferSize: number;
    // private bufferSizeAfterLimit: number;
    // private currentLimit: number;
    // private enableAliasing: boolean;
    // private input: InputStream;
    // private lastTag: number;
    // private recursionDepth: number;
    // private recursionLimit: number;
    // private refillCallback: CodedInputStream$RefillCallback;
    // private sizeLimit: number;
    // private totalBytesRetired: number;
    checkLastTagWas(arg0: number): void;
    checkRecursionLimit(): void;
    // private ensureAvailable(arg0: number): void;
    getBytesUntilLimit(): number;
    isAtEnd(): boolean;
    popLimit(arg0: number): void;
    pushLimit(arg0: number): number;
    readBool(): boolean;
    readBytes(): number[];
    readDouble(): number;
    readEnum(): number;
    readFixed32(): number;
    readFixed64(): number;
    readFloat(): number;
    readGroup(arg0: number, arg1: MessageLite$Builder, arg2: ExtensionRegistryLite): void;
    readInt32(): number;
    readInt64(): number;
    readMessage(arg0: MessageLite$Builder, arg1: ExtensionRegistryLite): void;
    readMessage<T extends MessageLite>(arg0: Parser<T>, arg1: ExtensionRegistryLite): T;
    readRawByte(): number;
    // private readRawBytesSlowPath(arg0: number): number[];
    readRawLittleEndian32(): number;
    readRawLittleEndian64(): number;
    readRawVarint32(): number;
    readRawVarint64(): number;
    readRawVarint64SlowPath(): number;
    readSFixed32(): number;
    readSFixed64(): number;
    readSInt32(): number;
    readSInt64(): number;
    readString(): string;
    readStringRequireUtf8(): string;
    readTag(): number;
    readUInt32(): number;
    readUInt64(): number;
    // private recomputeBufferSizeAfterLimit(): void;
    // private refillBuffer(arg0: number): void;
    skipField(arg0: number, arg1: CodedOutputStream): boolean;
    skipMessage(arg0: CodedOutputStream): void;
    skipRawBytes(arg0: number): void;
    // private skipRawBytesSlowPath(arg0: number): void;
    // private tryRefillBuffer(arg0: number): boolean;
}