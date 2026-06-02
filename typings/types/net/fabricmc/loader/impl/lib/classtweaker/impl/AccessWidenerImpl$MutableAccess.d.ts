import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener$Access } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener$Access.d.ts'
export interface AccessWidenerImpl$MutableAccess extends Object, AccessWidener$Access{
    isChanged(): boolean;
    makeAccessible(): AccessWidenerImpl$MutableAccess;
    makeExtendable(): AccessWidenerImpl$MutableAccess;
    makeMutable(): AccessWidenerImpl$MutableAccess;
}