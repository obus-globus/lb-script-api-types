import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { Configuration } from '../../../../../io/ktor/serialization/Configuration.d.ts'
import type { ContentConverter } from '../../../../../io/ktor/serialization/ContentConverter.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ContentTypeWithQuality } from '../../../../../io/ktor/server/plugins/contentnegotiation/ContentTypeWithQuality.d.ts'
import type { ConverterRegistration } from '../../../../../io/ktor/server/plugins/contentnegotiation/ConverterRegistration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export class ContentNegotiationConfig extends Object implements Configuration {
    constructor()
    // private acceptContributors: (param0: ApplicationCall, param1: ContentTypeWithQuality[]) => ContentTypeWithQuality[][];
    /*not mapped: */ getAcceptContributors$ktor_server_content_negotiation(): (param0: ApplicationCall, param1: ContentTypeWithQuality[]) => ContentTypeWithQuality[][];
    checkAcceptHeaderCompliance: boolean;
    // private ignoredTypes: KClass<Object>[];
    /*not mapped: */ getIgnoredTypes$ktor_server_content_negotiation(): KClass<Object>[];
    // private registrations: ConverterRegistration[];
    /*not mapped: */ getRegistrations$ktor_server_content_negotiation(): ConverterRegistration[];
    accept(contributor: (param0: ApplicationCall, param1: ContentTypeWithQuality[]) => ContentTypeWithQuality[]): void;
    clearIgnoredTypes(): void;
    ignoreType(): void;
    ignoreType(type: KClass<Object>): void;
    register<T extends ContentConverter>(contentType: ContentType, converter: T, configuration: (param0: T) => void): void;
    removeIgnoredType(): void;
    removeIgnoredType(type: KClass<Object>): void;
}