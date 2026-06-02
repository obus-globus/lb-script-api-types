import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
import type { V0ModMetadata$Mixins } from '../../../../../net/fabricmc/loader/impl/metadata/V0ModMetadata$Mixins.d.ts'
export class V0ModMetadata extends AbstractModMetadata implements LoaderModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: string, arg1: Version, arg2: E[], arg3: V0ModMetadata$Mixins, arg4: ModEnvironment, arg5: string, arg6: E[], arg7: string, arg8: string, arg9: E[], arg10: E[], arg11: ContactInformation, arg12: string)
    readonly authors: E[];
    readonly contributors: E[];
    readonly dependencies: E[];
    readonly description: string;
    readonly environment: ModEnvironment;
    readonly id: string;
    // private initializer: string;
    // private initializers: E[];
    // private languageAdapter: string;
    readonly license: string;
    // private links: ContactInformation;
    // private mixins: V0ModMetadata$Mixins;
    readonly name: string;
    readonly version: Version;
    containsCustomValue(arg0: string): boolean;
    emitFormatWarnings(): void;
    getAuthors(): E[];
    getClassTweaker(): string;
    getContact(): ContactInformation;
    getContributors(): E[];
    getCustomValue(arg0: string): CustomValue;
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
    getOldStyleLanguageAdapter(): string;
    getProvides(): E[];
    getSchemaVersion(): number;
    getType(): string;
    getVersion(): Version;
    loadsInEnvironment(arg0: EnvType): boolean;
    setDependencies(arg0: E[]): void;
    setVersion(arg0: Version): void;
}