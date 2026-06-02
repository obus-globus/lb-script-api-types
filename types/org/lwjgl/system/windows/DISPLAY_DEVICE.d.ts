import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class DISPLAY_DEVICE extends Struct<DISPLAY_DEVICE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CB: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEID: number;
    static DEVICEKEY: number;
    static DEVICENAME: number;
    static DEVICESTRING: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STATEFLAGS: number;
    static calloc(): DISPLAY_DEVICE;
    static calloc(paramarg0: MemoryStack): DISPLAY_DEVICE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): DISPLAY_DEVICE;
    static create(paramarg0: number): DISPLAY_DEVICE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): DISPLAY_DEVICE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): DISPLAY_DEVICE;
    static malloc(paramarg0: MemoryStack): DISPLAY_DEVICE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nDeviceID(paramarg0: number): ByteBuffer;
    static nDeviceIDString(paramarg0: number): string;
    static nDeviceKey(paramarg0: number): ByteBuffer;
    static nDeviceKeyString(paramarg0: number): string;
    static nDeviceName(paramarg0: number): ByteBuffer;
    static nDeviceNameString(paramarg0: number): string;
    static nDeviceString(paramarg0: number): ByteBuffer;
    static nDeviceStringString(paramarg0: number): string;
    static nStateFlags(paramarg0: number): number;
    static ncb(paramarg0: number): number;
    static ncb(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    DeviceID(): ByteBuffer;
    DeviceIDString(): string;
    DeviceKey(): ByteBuffer;
    DeviceKeyString(): string;
    DeviceName(): ByteBuffer;
    DeviceNameString(): string;
    DeviceString(): ByteBuffer;
    DeviceStringString(): string;
    StateFlags(): number;
    cb(): number;
    cb(arg0: number): DISPLAY_DEVICE;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): DISPLAY_DEVICE;
    set(arg0: DISPLAY_DEVICE): DISPLAY_DEVICE;
    sizeof(): number;
}