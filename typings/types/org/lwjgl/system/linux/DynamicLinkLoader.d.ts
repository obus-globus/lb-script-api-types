import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class DynamicLinkLoader extends Object {
    static RTLD_BINDING_MASK: number;
    static RTLD_DEEPBIND: number;
    static RTLD_GLOBAL: number;
    static RTLD_LAZY: number;
    static RTLD_LOCAL: number;
    static RTLD_NODELETE: number;
    static RTLD_NOLOAD: number;
    static RTLD_NOW: number;
    static dlclose(paramarg0: number): number;
    static dlerror(): string;
    static dlopen(paramarg0: CharSequence, paramarg1: number): number;
    static dlopen(paramarg0: ByteBuffer, paramarg1: number): number;
    static dlsym(paramarg0: number, paramarg1: CharSequence): number;
    static dlsym(paramarg0: number, paramarg1: ByteBuffer): number;
    static ndlclose(paramarg0: number): number;
    static ndlerror(): number;
    static ndlopen(paramarg0: number, paramarg1: number): number;
    static ndlsym(paramarg0: number, paramarg1: number): number;
    constructor()
}