import type { Object } from '../../../java/lang/Object.d.ts'
import type { UShort } from '../../../kotlin/UShort.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
import type { UShortArrayBuilder } from '../../../kotlinx/serialization/internal/UShortArrayBuilder.d.ts'
export class UShortArraySerializer extends PrimitiveArraySerializer<UShort, (Object | null)[], UShortArrayBuilder> implements KSerializer<(Object | null)[]> {
    static INSTANCE: UShortArraySerializer;
    protected empty(): (Object | null)[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: UShortArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: (Object | null)[], size: number): void;
}