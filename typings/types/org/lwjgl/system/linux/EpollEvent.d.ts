import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { EpollData } from '../../../../org/lwjgl/system/linux/EpollData.d.ts'
export class EpollEvent extends Struct<EpollEvent> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static EVENTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): EpollEvent;
    static calloc(paramarg0: MemoryStack): EpollEvent;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): EpollEvent;
    static create(paramarg0: number): EpollEvent;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): EpollEvent;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): EpollEvent;
    static malloc(paramarg0: MemoryStack): EpollEvent;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): EpollData;
    static ndata(paramarg0: number, paramarg1: EpollData): void;
    static nevents(paramarg0: number): number;
    static nevents(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): EpollEvent;
    data(): EpollData;
    data(arg0: (param0: EpollData) => void): EpollEvent;
    data(arg0: EpollData): EpollEvent;
    events(): number;
    events(arg0: number): EpollEvent;
    set(arg0: number, arg1: EpollData): EpollEvent;
    set(arg0: EpollEvent): EpollEvent;
    sizeof(): number;
}