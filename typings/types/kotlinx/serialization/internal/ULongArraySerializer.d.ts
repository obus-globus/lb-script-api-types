import type { Object } from '../../../java/lang/Object.d.ts'
import type { ULong } from '../../../kotlin/ULong.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
import type { ULongArrayBuilder } from '../../../kotlinx/serialization/internal/ULongArrayBuilder.d.ts'
export class ULongArraySerializer extends PrimitiveArraySerializer<ULong, (Object | null)[], ULongArrayBuilder> implements KSerializer<(Object | null)[]> {
    static INSTANCE: ULongArraySerializer;
    protected empty(): (Object | null)[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: ULongArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: (Object | null)[], size: number): void;
}