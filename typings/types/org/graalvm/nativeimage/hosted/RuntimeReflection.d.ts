import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeReflection extends Object {
    static register(paramfinalIsWritable: boolean, paramallowUnsafeAccess: boolean, ...paramfields: Field[]): void;
    static register(paramfinalIsWritable: boolean, ...paramfields: Field[]): void;
    static register(...paramclasses: Class<Object>[]): void;
    static register(...parammethods: Executable[]): void;
    static register(...paramfields: Field[]): void;
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
    static registerAsQueried(...parammethods: Executable[]): void;
    static registerClassLookup(paramclassName: string): void;
    static registerConstructorLookup(paramdeclaringClass: Class<Object>, ...paramparameterTypes: Class<Object>[]): void;
    static registerFieldLookup(paramdeclaringClass: Class<Object>, paramfieldName: string): void;
    static registerForReflectiveInstantiation(...paramclasses: Class<Object>[]): void;
    static registerMethodLookup(paramdeclaringClass: Class<Object>, parammethodName: string, ...paramparameterTypes: Class<Object>[]): void;
    private constructor()
}