import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { TruffleLanguage$ContextPolicy } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextPolicy.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export interface TruffleLanguage$Registration extends Annotation, Object{
    constructor(byteMimeTypes: string[], characterMimeTypes: string[], contextPolicy: TruffleLanguage$ContextPolicy, defaultMimeType: string, dependentLanguages: string[], fileTypeDetectors: KClass<TruffleFile$FileTypeDetector>[], id: string, implementationName: string, interactive: boolean, internal: boolean, internalResources: KClass<InternalResource>[], name: string, needsAllEncodings: boolean, optionalResources: string[], sandbox: SandboxPolicy, services: KClass<Object>[], version: string, website: string)
    /*not mapped: */ byteMimeTypes(): string[];
    /*not mapped: */ characterMimeTypes(): string[];
    /*not mapped: */ contextPolicy(): TruffleLanguage$ContextPolicy;
    /*not mapped: */ defaultMimeType(): string;
    /*not mapped: */ dependentLanguages(): string[];
    /*not mapped: */ fileTypeDetectors(): KClass<TruffleFile$FileTypeDetector>[];
    /*not mapped: */ id(): string;
    /*not mapped: */ implementationName(): string;
    /*not mapped: */ interactive(): boolean;
    /*not mapped: */ internal(): boolean;
    /*not mapped: */ internalResources(): KClass<InternalResource>[];
    /*not mapped: */ name(): string;
    /*not mapped: */ needsAllEncodings(): boolean;
    /*not mapped: */ optionalResources(): string[];
    /*not mapped: */ sandbox(): SandboxPolicy;
    /*not mapped: */ services(): KClass<Object>[];
    /*not mapped: */ version(): string;
    /*not mapped: */ website(): string;
}