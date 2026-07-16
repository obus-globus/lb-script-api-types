import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkApplicationInfo extends Struct<VkApplicationInfo> implements NativeResource {
    static ALIGNOF: number;
    static APIVERSION: number;
    static APPLICATIONVERSION: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENGINEVERSION: number;
    static PAPPLICATIONNAME: number;
    static PENGINENAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkApplicationInfo;
    static calloc(paramarg0: MemoryStack): VkApplicationInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkApplicationInfo;
    static create(paramarg0: number): VkApplicationInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkApplicationInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkApplicationInfo;
    static malloc(paramarg0: MemoryStack): VkApplicationInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static napiVersion(paramarg0: number): number;
    static napiVersion(paramarg0: number, paramarg1: number): void;
    static napplicationVersion(paramarg0: number): number;
    static napplicationVersion(paramarg0: number, paramarg1: number): void;
    static nengineVersion(paramarg0: number): number;
    static nengineVersion(paramarg0: number, paramarg1: number): void;
    static npApplicationName(paramarg0: number): ByteBuffer;
    static npApplicationName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npApplicationNameString(paramarg0: number): string;
    static npEngineName(paramarg0: number): ByteBuffer;
    static npEngineName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npEngineNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    apiVersion(): number;
    apiVersion(arg0: number): VkApplicationInfo;
    applicationVersion(): number;
    applicationVersion(arg0: number): VkApplicationInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkApplicationInfo;
    engineVersion(): number;
    engineVersion(arg0: number): VkApplicationInfo;
    pApplicationName(): ByteBuffer;
    pApplicationName(arg0: ByteBuffer): VkApplicationInfo;
    pApplicationNameString(): string;
    pEngineName(): ByteBuffer;
    pEngineName(arg0: ByteBuffer): VkApplicationInfo;
    pEngineNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkApplicationInfo;
    sType(): number;
    sType(arg0: number): VkApplicationInfo;
    sType$Default(): VkApplicationInfo;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: number, arg4: ByteBuffer, arg5: number, arg6: number): VkApplicationInfo;
    set(arg0: VkApplicationInfo): VkApplicationInfo;
    sizeof(): number;
}