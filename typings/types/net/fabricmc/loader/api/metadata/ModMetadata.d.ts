import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
export interface ModMetadata extends Object{
    containsCustomElement(arg0: string): boolean;
    containsCustomValue(arg0: string): boolean;
    getAuthors(): E[];
    getBreaks(): E[];
    getConflicts(): E[];
    getContact(): ContactInformation;
    getContributors(): E[];
    getCustomValue(arg0: string): CustomValue;
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): E[];
    getDepends(): E[];
    getDescription(): string;
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getLicense(): E[];
    getName(): string;
    getProvides(): E[];
    getRecommends(): E[];
    getSuggests(): E[];
    getType(): string;
    getVersion(): Version;
}