import type { Object } from '../../../java/lang/Object.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
import type { UByteArrayBuilder } from '../../../kotlinx/serialization/internal/UByteArrayBuilder.d.ts'
export class UByteArraySerializer extends PrimitiveArraySerializer<UByte, (Object | null)[], UByteArrayBuilder> implements KSerializer<(Object | null)[]> {
    static INSTANCE: UByteArraySerializer;
    protected empty(): (Object | null)[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: UByteArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: (Object | null)[], size: number): void;
}