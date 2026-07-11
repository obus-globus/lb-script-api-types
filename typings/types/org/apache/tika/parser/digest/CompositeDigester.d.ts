import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { DigestingParser$Digester } from '../../../../../org/apache/tika/parser/DigestingParser$Digester.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
export class CompositeDigester extends Object implements DigestingParser$Digester {
    constructor(...arg0: DigestingParser$Digester[])
    // private digesters: DigestingParser$Digester[];
    digest(arg0: InputStream, arg1: Metadata, arg2: ParseContext): void;
}