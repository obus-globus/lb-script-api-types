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
import type { V0ModMetadata$Mixins } from '../../../../../net/fabricmc/loader/impl/metadata/V0ModMetadata$Mixins.d.ts'
export class V0ModMetadata extends AbstractModMetadata implements LoaderModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: string, arg1: Version, arg2: ModDependency[], arg3: V0ModMetadata$Mixins, arg4: ModEnvironment, arg5: string, arg6: string[], arg7: string, arg8: string, arg9: Person[], arg10: Person[], arg11: ContactInformation, arg12: string)
    readonly authors: Person[];
    readonly contributors: Person[];
    readonly dependencies: ModDependency[];
    readonly description: string;
    readonly environment: ModEnvironment;
    readonly id: string;
    // private initializer: string;
    // private initializers: string[];
    // private languageAdapter: string;
    readonly license: string;
    // private links: ContactInformation;
    // private mixins: V0ModMetadata$Mixins;
    readonly name: string;
    readonly version: Version;
    containsCustomValue(arg0: string): boolean;
    emitFormatWarnings(): void;
    getAuthors(): Person[];
    getClassTweaker(): string;
    getContact(): ContactInformation;
    getContributors(): Person[];
    getCustomValue(arg0: string): CustomValue;
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