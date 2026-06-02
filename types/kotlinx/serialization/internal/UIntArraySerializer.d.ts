import type { Object } from '../../../java/lang/Object.d.ts'
import type { UInt } from '../../../kotlin/UInt.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
import type { UIntArrayBuilder } from '../../../kotlinx/serialization/internal/UIntArrayBuilder.d.ts'
export class UIntArraySerializer extends PrimitiveArraySerializer<UInt, (Object | null)[], UIntArrayBuilder> implements KSerializer<(Object | null)[]> {
    static INSTANCE: UIntArraySerializer;
    protected empty(): (Object | null)[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: UIntArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: (Object | null)[], size: number): void;
}