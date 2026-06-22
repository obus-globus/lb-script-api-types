import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { DomainObject } from '../../../../../net/fabricmc/loader/impl/discovery/DomainObject.d.ts'
export interface DomainObject$Mod extends Object, DomainObject{
    getId(): string;
    getVersion(): Version;
}