import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { BooleanArrayBuilder } from '../../../kotlinx/serialization/internal/BooleanArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class BooleanArraySerializer extends PrimitiveArraySerializer<boolean, (Object | null)[], BooleanArrayBuilder> implements KSerializer<(Object | null)[]> {
    static INSTANCE: BooleanArraySerializer;
    protected empty(): (Object | null)[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: BooleanArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: (Object | null)[], size: number): void;
}