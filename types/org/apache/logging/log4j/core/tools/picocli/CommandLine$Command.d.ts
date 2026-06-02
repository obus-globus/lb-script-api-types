import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../../kotlin/reflect/KClass.d.ts'
export interface CommandLine$Command extends Annotation, Object{
    constructor(abbreviateSynopsis: boolean, commandListHeading: string, customSynopsis: string[], description: string[], descriptionHeading: string, footer: string[], footerHeading: string, header: string[], headerHeading: string, name: string, optionListHeading: string, parameterListHeading: string, requiredOptionMarker: string, separator: string, showDefaultValues: boolean, sortOptions: boolean, subcommands: KClass<Object>[], synopsisHeading: string, version: string[])
    /*not mapped: */ abbreviateSynopsis(): boolean;
    /*not mapped: */ commandListHeading(): string;
    /*not mapped: */ customSynopsis(): string[];
    /*not mapped: */ description(): string[];
    /*not mapped: */ descriptionHeading(): string;
    /*not mapped: */ footer(): string[];
    /*not mapped: */ footerHeading(): string;
    /*not mapped: */ header(): string[];
    /*not mapped: */ headerHeading(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ optionListHeading(): string;
    /*not mapped: */ parameterListHeading(): string;
    /*not mapped: */ requiredOptionMarker(): string;
    /*not mapped: */ separator(): string;
    /*not mapped: */ showDefaultValues(): boolean;
    /*not mapped: */ sortOptions(): boolean;
    /*not mapped: */ subcommands(): KClass<Object>[];
    /*not mapped: */ synopsisHeading(): string;
    /*not mapped: */ version(): string[];
}