import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ContentEncoder } from '../../../../../io/ktor/util/ContentEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressionEncoderConfig extends Object {
    constructor(encoder: ContentEncoder, conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[], priority: number)
    readonly conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    readonly encoder: ContentEncoder;
    readonly priority: number;
    component1(): ContentEncoder;
    component2(): (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    component3(): number;
    copy(encoder: ContentEncoder, conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[], priority: number): CompressionEncoderConfig;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}