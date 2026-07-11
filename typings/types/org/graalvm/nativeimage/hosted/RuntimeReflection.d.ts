import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeReflection extends Object {
    static register(paramfinalIsWritable: boolean, paramallowUnsafeAccess: boolean, ...paramfields: (Object | null)[]): void;
    static register(paramfinalIsWritable: boolean, ...paramfields: (Object | null)[]): void;
    static register(...paramclasses: Object | null): void;
    static register(...parammethods: (Object | null)[]): void;
    static register(...paramfields: (Object | null)[]): void;
    static registerAllClasses(paramdeclaringClass: Class<Object>): void;
    static registerAllConstructors(paramdeclaringClass: Class<Object>): void;
    static registerAllDeclaredClasses(paramdeclaringClass: Class<Object>): void;
    static registerAllDeclaredConstructors(paramdeclaringClass: Class<Object>): void;
    static registerAllDeclaredFields(paramdeclaringClass: Class<Object>): void;
    static registerAllDeclaredMethods(paramdeclaringClass: Class<Object>): void;
    static registerAllFields(paramdeclaringClass: Class<Object>): void;
    static registerAllMethods(paramdeclaringClass: Class<Object>): void;
    static registerAllNestMembers(paramdeclaringClass: Class<Object>): void;
    static registerAllPermittedSubclasses(paramdeclaringClass: Class<Object>): void;
    static registerAllRecordComponents(paramdeclaringClass: Class<Object>): void;
    static registerAllSigners(paramdeclaringClass: Class<Object>): void;
    static registerAsQueried(...parammethods: (Object | null)[]): void;
    static registerClassLookup(paramclassName: string): void;
    static registerConstructorLookup(paramdeclaringClass: Class<Object>, ...paramparameterTypes: Object | null): void;
    static registerFieldLookup(paramdeclaringClass: Class<Object>, paramfieldName: string): void;
    static registerForReflectiveInstantiation(...paramclasses: Object | null): void;
    static registerMethodLookup(paramdeclaringClass: Class<Object>, parammethodName: string, ...paramparameterTypes: Object | null): void;
    private constructor()
}