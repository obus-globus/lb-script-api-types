import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { SimpleCommandExceptionType } from '../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Identifier extends Object implements Comparable<Identifier> {
    static ALLOWED_NAMESPACE_CHARACTERS: string;
    static CODEC: Codec<Identifier>;
    static DEFAULT_NAMESPACE: string;
    static ERROR_INVALID: SimpleCommandExceptionType;
    static NAMESPACE_SEPARATOR: string;
    static REALMS_NAMESPACE: string;
    static STREAM_CODEC: StreamCodec<ByteBuf, Identifier>;
    static bySeparator(paramidentifier: string, paramseparator: string): Identifier;
    static fromNamespaceAndPath(paramnamespace: string, parampath: string): Identifier;
    static isAllowedInIdentifier(paramc: string): boolean;
    static isValidNamespace(paramnamespace: string): boolean;
    static isValidPath(parampath: string): boolean;
    static parse(paramidentifier: string): Identifier;
    static read(paraminput: string): DataResult<Identifier>;
    static read(paramreader: StringReader): Identifier;
    static readNonEmpty(paramreader: StringReader): Identifier;
    static tryBuild(paramnamespace: string, parampath: string): Identifier;
    static tryBySeparator(paramidentifier: string, paramseparator: string): Identifier;
    static tryParse(paramidentifier: string): Identifier;
    static validPathChar(paramc: string): boolean;
    static withDefaultNamespace(parampath: string): Identifier;
    private constructor(namespace: string, path: string)
    readonly namespace: string;
    readonly path: string;
    compareTo(o: Identifier): number;
    equals(o: Object | null): boolean;
    getNamespace(): string;
    getPath(): string;
    hashCode(): number;
    resolveAgainst(root: Path): Path;
    toDebugFileName(): string;
    toLanguageKey(): string;
    toLanguageKey(prefix: string): string;
    toLanguageKey(prefix: string, suffix: string): string;
    toShortLanguageKey(): string;
    toShortString(): string;
    toString(): string;
    withPath(modifier: (param0: string) => string): Identifier;
    withPath(newPath: string): Identifier;
    withPrefix(prefix: string): Identifier;
    withSuffix(suffix: string): Identifier;
}