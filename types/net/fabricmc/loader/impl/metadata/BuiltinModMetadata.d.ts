import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { AbstractModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/AbstractModMetadata.d.ts'
export class BuiltinModMetadata extends AbstractModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    private constructor(arg0: string, arg1: Version, arg2: ModEnvironment, arg3: string, arg4: string, arg5: E[], arg6: E[], arg7: ContactInformation, arg8: E[], arg9: { [key: number]: string }, arg10: E[])
    readonly authors: E[];
    readonly contact: ContactInformation;
    readonly contributors: E[];
    readonly dependencies: E[];
    readonly description: string;
    readonly environment: ModEnvironment;
    // private icons: { [key: number]: string };
    readonly id: string;
    readonly license: E[];
    readonly name: string;
    readonly version: Version;
    containsCustomValue(arg0: string): boolean;
    getAuthors(): E[];
    getContact(): ContactInformation;
    getContributors(): E[];
    getCustomValue(arg0: string): CustomValue;
    getCustomValues(): { [key: string]: CustomValue };
    getDependencies(): E[];
    getDescription(): string;
    getEnvironment(): ModEnvironment;
    getIconPath(arg0: number): Optional<string>;
    getId(): string;
    getLicense(): E[];
    getName(): string;
    getProvides(): E[];
    getType(): string;
    getVersion(): Version;
}