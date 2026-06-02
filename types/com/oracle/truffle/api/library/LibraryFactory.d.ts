import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { LibraryFactory$CachedAOTExports } from '../../../../../com/oracle/truffle/api/library/LibraryFactory$CachedAOTExports.d.ts'
import type { LibraryFactory$ProxyExports } from '../../../../../com/oracle/truffle/api/library/LibraryFactory$ProxyExports.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { DefaultExportProvider } from '../../../../../com/oracle/truffle/api/library/provider/DefaultExportProvider.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LibraryFactory<T extends Library> extends Object {
    static resolve(paramlibrary: Class<Object>): LibraryFactory<Object>;
    constructor(libraryClass: Class<T>, messages: Message[])
    // private afterBuiltinDefaultExports: DefaultExportProvider[];
    // private aot: LibraryFactory$CachedAOTExports;
    // private beforeBuiltinDefaultExports: DefaultExportProvider[];
    // private cachedCache: Map<Class<Object>, T>;
    // private dispatchLibrary: DynamicDispatchLibrary;
    // private exportCache: Map<Class<Object>, LibraryExport<T>>;
    // private libraryClass: Class<T>;
    readonly messages: Message[];
    // private nameToMessages: { [key: string]: Message };
    // private proxyExports: LibraryFactory$ProxyExports;
    // private uncachedCache: Map<Class<Object>, T>;
    // private uncachedDispatch: T;
    // private aotSupport(): LibraryFactory$CachedAOTExports;
    create(receiver: Object): T;
    createAOT(lib: LibraryExport<T>): T;
    createAssertions(delegate: T): T;
    // private createAssertionsImpl(export_: LibraryExport<T>, cached: T): T;
    createDelegate(original: T): T;
    createDispatchImpl(limit: number): T;
    createDispatched(limit: number): T;
    createMessageBitSet(enabledMessages: Message[]): FinalBitSet;
    createProxy(lib: ReflectionLibrary): T;
    createUncachedDispatch(): T;
    // private dispatch(receiver: Object): Class<Object>;
    // private ensureEagerExportsRegistered(): void;
    // private ensureLibraryInitialized(): void;
    genericDispatch(library: Library, receiver: Object, message: Message, arguments: Object[], parameterOffset: number): Object;
    getAOTExports(): LibraryExport<T>[];
    getDefaultClass(receiver: Object): Class<Object>;
    // private getDefaultClassImpl(receiver: Object): Class<Object>;
    getLibraryClass(): Class<T>;
    getLookup(): MethodHandles$Lookup;
    getMessages(): Message[];
    getUncached(): T;
    getUncached(receiver: Object): T;
    // private getUncachedSlowPath(receiver: Object, dispatchClass: Class<Object>): T;
    // private initDefaultExports(): void;
    // private initializeUncached(): T;
    lookupExport(receiver: Object, dispatchedClass: Class<Object>): LibraryExport<T>;
    // private needsAssertions(export_: LibraryExport<T>): boolean;
    toString(): string;
    // private validateExport(receiver: Object, dispatchClass: Class<Object>, library: T): boolean;
    // private validateExport(receiver: Object, dispatchedClass: Class<Object>, exports: LibraryExport<T>): void;
}