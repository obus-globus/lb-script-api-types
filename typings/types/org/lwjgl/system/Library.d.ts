import type { Class } from '../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../org/lwjgl/system/Configuration.d.ts'
import type { SharedLibrary } from '../../../org/lwjgl/system/SharedLibrary.d.ts'
export class Library extends Object {
    static JNI_LIBRARY_NAME: string;
    static initialize(): void;
    static loadNative(paramarg0: Class<Object>, paramarg1: string, paramarg2: string): SharedLibrary;
    static loadNative(paramarg0: Class<Object>, paramarg1: string, paramarg2: string, paramarg3: boolean): SharedLibrary;
    static loadNative(paramarg0: Class<Object>, paramarg1: string, paramarg2: Configuration<string>, ...paramarg3: string[]): SharedLibrary;
    static loadNative(paramarg0: Class<Object>, paramarg1: string, paramarg2: Configuration<string>, paramarg3: () => SharedLibrary, ...paramarg4: string[]): SharedLibrary;
    static loadNative(paramarg0: string, paramarg1: string): SharedLibrary;
    static loadSystem(paramarg0: string, paramarg1: string): void;
    static loadSystem(paramarg0: (param0: string) => void, paramarg1: (param0: string) => void, paramarg2: Class<Object>, paramarg3: string, paramarg4: string): void;
    private constructor()
}