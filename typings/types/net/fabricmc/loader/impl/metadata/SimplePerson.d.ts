import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { Person } from '../../../../../net/fabricmc/loader/api/metadata/Person.d.ts'
export class SimplePerson extends Object implements Person {
    constructor(arg0: string)
    readonly name: string;
    getContact(): ContactInformation;
    getName(): string;
}