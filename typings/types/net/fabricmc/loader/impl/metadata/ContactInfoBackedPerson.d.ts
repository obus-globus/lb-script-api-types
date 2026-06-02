import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { SimplePerson } from '../../../../../net/fabricmc/loader/impl/metadata/SimplePerson.d.ts'
export class ContactInfoBackedPerson extends SimplePerson {
    constructor(arg0: string, arg1: ContactInformation)
    readonly contact: ContactInformation;
    getContact(): ContactInformation;
}