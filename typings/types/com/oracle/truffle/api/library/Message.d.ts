import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Message extends Object {
    static resolve(paramlibraryClass: Class<Library>, parammessageName: string): Message;
    static resolve(paramlibraryClass: Class<Library>, parammessageName: string, paramfail: boolean): Message;
    static resolveExact(paramlibraryClass: Class<Library>, parammessageName: string, paramfail: boolean, ...paramargumentTypes: Class<Object>[]): Message;
    static resolveExact(paramlibraryClass: Class<Library>, parammessageName: string, ...paramargumentTypes: Class<Object>[]): Message;
    constructor(libraryClass: Class<Library>, messageName: string, id: number, returnType: Class<Object>, ...parameterTypes: Class<Object>[])
    constructor(libraryClass: Class<Library>, messageName: string, id: number, deprecated: boolean, returnType: Class<Object>, ...parameterTypes: Class<Object>[])
    readonly deprecated: boolean;
    readonly id: number;
    // private library: LibraryFactory<Library>;
    readonly libraryClass: Class<Library>;
    readonly parameterCount: number;
    // private parameterTypesArray: Class<Object>[];
    readonly qualifiedName: string;
    readonly returnType: Class<Object>;
    readonly simpleName: string;
    clone(): Object;
    getFactory(): LibraryFactory<any>;
    getId(): number;
    getLibraryClass(): Class<Library>;
    getLibraryName(): string;
    getParameterCount(): number;
    getParameterType(index: number): Class<Object>;
    getParameterTypes(): Class<Object>[];
    getQualifiedName(): string;
    getReceiverType(): Class<Object>;
    getReturnType(): Class<Object>;
    getSimpleName(): string;
    isDeprecated(): boolean;
    toString(): string;
}