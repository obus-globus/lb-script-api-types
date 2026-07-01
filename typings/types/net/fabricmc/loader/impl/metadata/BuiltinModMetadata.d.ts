import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
export class BuiltinModMetadata extends AbstractModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor(arg0: string, arg1: Version, arg2: ModEnvironment, arg3: string, arg4: string, arg5: (Object | null)[], arg6: (Object | null)[], arg7: ContactInformation, arg8: (Object | null)[], arg9: Map<Object, Object>, arg10: (Object | null)[], arg11: any)
    readonly authors: Person[];
    readonly contact: ContactInformation;
    readonly contributors: Person[];
    readonly dependencies: ModDependency[];
    readonly description: string;
    readonly environment: ModEnvironment;
    // private icons: { [key: number]: string };
    readonly id: string;
    readonly license: string[];
    readonly name: string;
    readonly version: Version;
    containsCustomValue(arg0: string): boolean;
    getAuthors(): Person[];
    getContact(): ContactInformation;
    getContributors(): Person[];
    getCustomValue(arg0: string): CustomValue;
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): ModDependency[];
    getDescription(): string;
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getLicense(): string[];
    getName(): string;
    getProvides(): string[];
    getType(): string;
    getVersion(): Version;
}