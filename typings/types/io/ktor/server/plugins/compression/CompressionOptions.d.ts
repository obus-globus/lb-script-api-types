import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressionEncoderConfig } from '../../../../../io/ktor/server/plugins/compression/CompressionEncoderConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressionOptions extends Object {
    constructor(encoders: JavaMap<string, CompressionEncoderConfig>, conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[])
    readonly conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    readonly encoders: JavaMap<string, CompressionEncoderConfig>;
    component1(): JavaMap<string, CompressionEncoderConfig>;
    component2(): (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    copy(encoders: JavaMap<string, CompressionEncoderConfig>, conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[]): CompressionOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}