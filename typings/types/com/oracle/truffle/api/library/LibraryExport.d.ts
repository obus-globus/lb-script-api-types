import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LibraryExport<T extends Library> extends Object {
    static register(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    constructor(library: Class<T>, receiverClass: Class<Object>, defaultExport: boolean)
    constructor(library: Class<T>, receiverClass: Class<Object>, defaultExport: boolean, aot: boolean, aotPriority: number)
    // private aot: boolean;
    // private aotPriority: number;
    // private defaultExport: boolean;
    // private library: Class<T>;
    // private receiverClass: Class<Object>;
    // private registerClass: Class<Object>;
    createCached(receiver: Object): T;
    createUncached(receiver: Object): T;
    getLibrary(): Class<T>;
    getReceiverClass(): Class<Object>;
    isAOT(): boolean;
    isDefaultExport(): boolean;
    toString(): string;
}