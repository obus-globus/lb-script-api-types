import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { AttributeKey } from '../../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SuppressionAttributeKt extends Object {
    static getDecompressionSuppressionAttribute(): AttributeKey<boolean>;
    static getSuppressionAttribute(): AttributeKey<boolean>;
    static isCompressionSuppressed(paramarg0: ApplicationCall): boolean;
    static isDecompressionSuppressed(paramarg0: ApplicationCall): boolean;
    static suppressCompression(self: ApplicationCall): void;
    static suppressDecompression(self: ApplicationCall): void;
}