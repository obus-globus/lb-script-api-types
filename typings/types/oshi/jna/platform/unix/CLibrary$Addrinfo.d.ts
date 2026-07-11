import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary$Addrinfo$ByReference } from '../../../../oshi/jna/platform/unix/CLibrary$Addrinfo$ByReference.d.ts'
import type { CLibrary$Sockaddr$ByReference } from '../../../../oshi/jna/platform/unix/CLibrary$Sockaddr$ByReference.d.ts'
export class CLibrary$Addrinfo extends Structure implements AutoCloseable {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
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