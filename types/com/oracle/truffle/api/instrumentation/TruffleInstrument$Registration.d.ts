import type { InternalResource } from '../../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export interface TruffleInstrument$Registration extends Annotation, Object{
    constructor(id: string, internal: boolean, internalResources: KClass<InternalResource>[], name: string, optionalResources: string[], sandbox: SandboxPolicy, services: KClass<Object>[], version: string, website: string)
    /*not mapped: */ id(): string;
    /*not mapped: */ internal(): boolean;
    /*not mapped: */ internalResources(): KClass<InternalResource>[];
    /*not mapped: */ name(): string;
    /*not mapped: */ optionalResources(): string[];
    /*not mapped: */ sandbox(): SandboxPolicy;
    /*not mapped: */ services(): KClass<Object>[];
    /*not mapped: */ version(): string;
    /*not mapped: */ website(): string;
}