import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
export interface ModMetadata extends Object{
    containsCustomElement(arg0: string): boolean;
    containsCustomValue(arg0: string): boolean;
    getAuthors(): Person[];
    getBreaks(): ModDependency[];
    getConflicts(): ModDependency[];
    getContact(): ContactInformation;
    getContributors(): Person[];
    getCustomValue(arg0: string): CustomValue;
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): ModDependency[];
    getDepends(): ModDependency[];
    getDescription(): string;
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getLicense(): string[];
    getName(): string;
    getProvides(): string[];
    getRecommends(): ModDependency[];
    getSuggests(): ModDependency[];
    getType(): string;
    getVersion(): Version;
}