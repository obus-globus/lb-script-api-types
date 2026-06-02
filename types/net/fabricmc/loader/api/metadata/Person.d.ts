import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
export interface Person extends Object{
    getContact(): ContactInformation;
    getName(): string;
}