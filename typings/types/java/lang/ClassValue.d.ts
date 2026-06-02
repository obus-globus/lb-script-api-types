import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassValue$Entry } from '../../java/lang/ClassValue$Entry.d.ts'
import type { ClassValue$Identity } from '../../java/lang/ClassValue$Identity.d.ts'
import type { ClassValue$Version } from '../../java/lang/ClassValue$Version.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ClassValue<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private hashCodeForCache: number;
    // private identity: ClassValue$Identity;
    // private version: ClassValue$Version<T>;
    bumpVersion(): void;
    castEntry(arg0: ClassValue$Entry<Object>): ClassValue$Entry<T>;
    computeValue(arg0: Class<Object>): T;
    get(arg0: Class<Object>): T;
    // private getFromBackup(arg0: ClassValue$Entry<Object>[], arg1: Class<Object>): T;
    // private getFromHashMap(arg0: Class<Object>): T;
    match(arg0: ClassValue$Entry<Object>): boolean;
    put(arg0: Class<Object>, arg1: T): void;
    remove(arg0: Class<Object>): void;
}