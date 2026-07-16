import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { CLibrary$Addrinfo$ByReference } from '../../../../oshi/jna/platform/unix/CLibrary$Addrinfo$ByReference.d.ts'
import type { CLibrary$Sockaddr$ByReference } from '../../../../oshi/jna/platform/unix/CLibrary$Sockaddr$ByReference.d.ts'
export class CLibrary$Addrinfo extends Structure implements AutoCloseable {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    ai_addr: CLibrary$Sockaddr$ByReference;
    ai_addrlen: number;
    ai_canonname: string;
    ai_family: number;
    ai_flags: number;
    ai_next: CLibrary$Addrinfo$ByReference;
    ai_protocol: number;
    ai_socktype: number;
    close(): void;
}