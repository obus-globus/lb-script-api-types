import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { ModMetadata } from '../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { EntrypointMetadata } from '../../../../net/fabricmc/loader/metadata/EntrypointMetadata.d.ts'
export interface LoaderModMetadata extends Object, ModMetadata{
    containsCustomElement(arg0: string): boolean;
    containsCustomValue(arg0: string): boolean;
    getBreaks(): ModDependency[];
    getConflicts(): ModDependency[];
    getContact(): ContactInformation;
    getCustomValue(arg0: string): CustomValue;
    getDepends(): ModDependency[];
    getDescription(): string;
    getEntrypointKeys(): string[];
    getEntrypoints(arg0: string): EntrypointMetadata[];
    getEnvironment(): ModEnvironment;
    getId(): string;
    getName(): string;
    getRecommends(): ModDependency[];
    getSuggests(): ModDependency[];
    getType(): string;
    getVersion(): Version;
    loadsInEnvironment(arg0: EnvType): boolean;
}