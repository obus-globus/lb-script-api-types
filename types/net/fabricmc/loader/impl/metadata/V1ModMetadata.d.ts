import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
import type { V1ModMetadata$IconEntry } from '../../../../../net/fabricmc/loader/impl/metadata/V1ModMetadata$IconEntry.d.ts'
export class V1ModMetadata extends AbstractModMetadata implements LoaderModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: string, arg1: Version, arg2: E[], arg3: ModEnvironment, arg4: { [key: string]: EntrypointMetadata[] }, arg5: E[], arg6: E[], arg7: string, arg8: E[], arg9: boolean, arg10: string, arg11: string, arg12: E[], arg13: E[], arg14: ContactInformation, arg15: E[], arg16: V1ModMetadata$IconEntry, arg17: { [key: string]: string }, arg18: { [key: string]: CustomValue })
    readonly authors: E[];
    readonly classTweaker: string;
    readonly contact: ContactInformation;
    readonly contributors: E[];
    readonly customValues: { [key: string]: CustomValue };
    readonly dependencies: E[];
    readonly description: string;
    // private entrypoints: { [key: string]: EntrypointMetadata[] };
    readonly environment: ModEnvironment;
    // private hasRequires: boolean;
    // private icon: V1ModMetadata$IconEntry;
    readonly id: string;
    readonly jars: E[];
    // private languageAdapters: { [key: string]: string };
    readonly license: E[];
    // private mixins: E[];
    readonly name: string;
    readonly provides: E[];
    readonly version: Version;
    emitFormatWarnings(): void;
    getAuthors(): E[];
    getClassTweaker(): string;
    getContact(): ContactInformation;
    getContributors(): E[];
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): E[];
    getDescription(): string;
    getEntrypointKeys(): E[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getJars(): E[];
    getLanguageAdapterDefinitions(): { [key: string]: string };
    getLicense(): E[];
    getMixinConfigs(arg0: EnvType): E[];
    getName(): string;
    getOldInitializers(): E[];
    getOldStyleLanguageAdapter(): string;
    getProvides(): E[];
    getSchemaVersion(): number;
    getType(): string;
    getVersion(): Version;
    loadsInEnvironment(arg0: EnvType): boolean;
    setDependencies(arg0: E[]): void;
    setVersion(arg0: Version): void;
}