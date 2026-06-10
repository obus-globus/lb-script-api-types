import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModEnvironment } from '../../../../../net/fabricmc/loader/api/metadata/ModEnvironment.d.ts'
import type { ModMetadata } from '../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
export class BuiltinModMetadata$Builder extends Object {
    constructor(arg0: string, arg1: string)
    // private authors: Person[];
    // private contact: ContactInformation;
    // private contributors: Person[];
    // private dependencies: ModDependency[];
    // private description: string;
    // private environment: ModEnvironment;
    // private icons: { [key: number]: string };
    // private id: string;
    // private license: string[];
    // private name: string;
    // private version: Version;
    addAuthor(arg0: string, arg1: { [key: string]: string }): BuiltinModMetadata$Builder;
    addContributor(arg0: string, arg1: { [key: string]: string }): BuiltinModMetadata$Builder;
    addDependency(arg0: ModDependency): BuiltinModMetadata$Builder;
    addIcon(arg0: number, arg1: string): BuiltinModMetadata$Builder;
    addLicense(arg0: string): BuiltinModMetadata$Builder;
    build(): ModMetadata;
    setContact(arg0: ContactInformation): BuiltinModMetadata$Builder;
    setDescription(arg0: string): BuiltinModMetadata$Builder;
    setEnvironment(arg0: ModEnvironment): BuiltinModMetadata$Builder;
    setName(arg0: string): BuiltinModMetadata$Builder;
}