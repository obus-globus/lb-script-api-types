import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { ModMetadata } from '../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
import type { NestedJarEntry } from '../../../../../net/fabricmc/loader/impl/metadata/NestedJarEntry.d.ts'
export class BuiltinMetadataWrapper extends AbstractModMetadata implements LoaderModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: ModMetadata)
    readonly dependencies: ModDependency[];
    // private parent: ModMetadata;
    readonly version: Version;
    containsCustomValue(arg0: string): boolean;
    emitFormatWarnings(): void;
    getAuthors(): Person[];
    getClassTweaker(): string;
    getContact(): ContactInformation;
    getContributors(): Person[];
    getCustomValue(arg0: string): CustomValue;
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): ModDependency[];
    getDescription(): string;
    getEntrypointKeys(): string[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getJars(): NestedJarEntry[];
    getLanguageAdapterDefinitions(): { [key: string]: string };
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