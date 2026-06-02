import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { CharArrayBuilder } from '../../../kotlinx/serialization/internal/CharArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class CharArraySerializer extends PrimitiveArraySerializer<string, string[], CharArrayBuilder> implements KSerializer<string[]> {
    static INSTANCE: CharArraySerializer;
    protected empty(): string[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: CharArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: string[], size: number): void;
}