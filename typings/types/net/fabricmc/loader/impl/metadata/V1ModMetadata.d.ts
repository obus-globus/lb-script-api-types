import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
import type { NestedJarEntry } from '../../../../../net/fabricmc/loader/impl/metadata/NestedJarEntry.d.ts'
import type { V1ModMetadata$IconEntry } from '../../../../../net/fabricmc/loader/impl/metadata/V1ModMetadata$IconEntry.d.ts'
import type { V1ModMetadata$MixinEntry } from '../../../../../net/fabricmc/loader/impl/metadata/V1ModMetadata$MixinEntry.d.ts'
export class V1ModMetadata extends AbstractModMetadata implements LoaderModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: string, arg1: Version, arg2: string[], arg3: ModEnvironment, arg4: JavaMap<string, EntrypointMetadata[]>, arg5: NestedJarEntry[], arg6: V1ModMetadata$MixinEntry[], arg7: string, arg8: ModDependency[], arg9: boolean, arg10: string, arg11: string, arg12: Person[], arg13: Person[], arg14: ContactInformation, arg15: string[], arg16: V1ModMetadata$IconEntry, arg17: JavaMap<string, string>, arg18: JavaMap<string, CustomValue>)
    readonly authors: Person[];
    readonly classTweaker: string;
    readonly contact: ContactInformation;
    readonly contributors: Person[];
    readonly customValues: JavaMap<string, CustomValue>;
    readonly dependencies: ModDependency[];
    readonly description: string;
    // private entrypoints: JavaMap<string, EntrypointMetadata[]>;
    readonly environment: ModEnvironment;
    // private hasRequires: boolean;
    // private icon: V1ModMetadata$IconEntry;
    readonly id: string;
    readonly jars: NestedJarEntry[];
    // private languageAdapters: JavaMap<string, string>;
    readonly license: string[];
    // private mixins: V1ModMetadata$MixinEntry[];
    readonly name: string;
    readonly provides: string[];
    readonly version: Version;
    emitFormatWarnings(): void;
    getAuthors(): Person[];
    getClassTweaker(): string;
    getContact(): ContactInformation;
    getContributors(): Person[];
    getCustomValues(): JavaMap<string, CustomValue>;
    getDependencies(): ModDependency[];
    getDescription(): string;
    getEntrypointKeys(): string[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getJars(): NestedJarEntry[];
    getLanguageAdapterDefinitions(): JavaMap<string, string>;
    getLicense(): string[];
    getMixinConfigs(arg0: EnvType): string[];
    getName(): string;
    getOldInitializers(): string[];
    getOldStyleLanguageAdapter(): string;
    getProvides(): string[];
    getSchemaVersion(): number;
    getType(): string;
    getVersion(): Version;
    loadsInEnvironment(arg0: EnvType): boolean;
    setDependencies(arg0: ModDependency[]): void;
    setVersion(arg0: Version): void;
}