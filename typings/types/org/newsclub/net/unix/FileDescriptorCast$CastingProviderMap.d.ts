import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDescriptorCast } from '../../../../org/newsclub/net/unix/FileDescriptorCast.d.ts'
import type { FileDescriptorCast$CastingProvider } from '../../../../org/newsclub/net/unix/FileDescriptorCast$CastingProvider.d.ts'
export abstract class FileDescriptorCast$CastingProviderMap extends Object {
    constructor()
    // private classes: Class<Object>[];
    // private providers: Map<Class<Object>, (param0: FileDescriptorCast, param1: Class<Object>) => Object | null>;
    addProvider<T extends Object | number | string | boolean>(arg0: Class<T>, arg1: (param0: FileDescriptorCast, param1: Class<Object>) => Object | null): void;
    // private addProvider0(arg0: Class<Object>, arg1: (param0: FileDescriptorCast, param1: Class<Object>) => Object | null): void;
    addProviders(): void;
    addProviders(arg0: FileDescriptorCast$CastingProviderMap): void;
    get<T extends Object | number | string | boolean>(arg0: Class<T>): (param0: FileDescriptorCast, param1: Class<Object>) => T;
    registerGenericDatagramSocketProviders(): void;
    registerGenericSocketProviders(): void;
}