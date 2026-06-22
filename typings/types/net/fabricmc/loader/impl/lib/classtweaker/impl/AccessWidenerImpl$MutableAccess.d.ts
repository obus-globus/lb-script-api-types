import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AccessWidener$Access } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/AccessWidener$Access.d.ts'
export interface AccessWidenerImpl$MutableAccess extends Object, AccessWidener$Access{
    apply(arg0: number, arg1: string, arg2: number): number;
    isAccessible(): boolean;
    isChanged(): boolean;
    isExtendable(): boolean;
    isMutable(): boolean;
    makeAccessible(): AccessWidenerImpl$MutableAccess;
    makeExtendable(): AccessWidenerImpl$MutableAccess;
    makeMutable(): AccessWidenerImpl$MutableAccess;
}