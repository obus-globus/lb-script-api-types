import type { Result } from '../../../../javax/xml/transform/Result.d.ts'
import type { Transformer } from '../../../../javax/xml/transform/Transformer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { DTDHandler } from '../../../../org/xml/sax/DTDHandler.d.ts'
import type { LexicalHandler } from '../../../../org/xml/sax/ext/LexicalHandler.d.ts'
export interface TransformerHandler extends Object, ContentHandler, DTDHandler, LexicalHandler{
    declaration(arg0: string, arg1: string, arg2: string): void;
    getSystemId(): string;
    getTransformer(): Transformer;
    setResult(arg0: Result): void;
    setSystemId(arg0: string): void;
}