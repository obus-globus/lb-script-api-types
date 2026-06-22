import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Pointer } from '../../../org/lwjgl/system/Pointer.d.ts'
export interface SharedLibrary extends Object, FunctionProvider, NativeResource, Pointer{
    address(): number;
    close(): void;
    free(): void;
    getFunctionAddress(arg0: CharSequence): number;
    getName(): string;
    getPath(): string;
}