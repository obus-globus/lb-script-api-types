import type { OutputStream } from '../../../../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ReachabilityMetadata$Type } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$Type.d.ts'
export class ReachabilityMetadata extends Object {
    static FIELDS: string;
    static FIELD_OR_METHOD_NAME: string;
    static METHODS: string;
    static PARAMETER_TYPES: string;
    static TYPE_NAME: string;
    static writeReflectConfig(paramtypes: ReachabilityMetadata$Type[], paramoutput: OutputStream): void;
    private constructor()
}