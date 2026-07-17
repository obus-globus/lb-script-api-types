import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { MessageDigest } from '../../../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { DigestingParser$Digester } from '../../../../../org/apache/tika/parser/DigestingParser$Digester.d.ts'
import type { DigestingParser$Encoder } from '../../../../../org/apache/tika/parser/DigestingParser$Encoder.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
export class InputStreamDigester extends Object implements DigestingParser$Digester {
    constructor(arg0: number, arg1: string, arg2: string, arg3: DigestingParser$Encoder)
    constructor(arg0: number, arg1: string, arg2: DigestingParser$Encoder)
    // private algorithm: string;
    // private algorithmKeyName: string;
    // private encoder: DigestingParser$Encoder;
    // private markLimit: number;
    digest(arg0: InputStream, arg1: Metadata, arg2: ParseContext): void;
    // private digestFile(arg0: File, arg1: number, arg2: Metadata): void;
    // private digestStream(arg0: InputStream, arg1: Metadata): boolean;
    // private getMetadataKey(): string;
    getProvider(): JavaMap<any, any>;
    // private newMessageDigest(): MessageDigest;
}