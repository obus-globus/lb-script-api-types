import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Module_Constructor } from '../../../../org/lwjgl/util/freetype/FT_Module_Constructor.d.ts'
import type { FT_Module_ConstructorI } from '../../../../org/lwjgl/util/freetype/FT_Module_ConstructorI.d.ts'
import type { FT_Module_Destructor } from '../../../../org/lwjgl/util/freetype/FT_Module_Destructor.d.ts'
import type { FT_Module_DestructorI } from '../../../../org/lwjgl/util/freetype/FT_Module_DestructorI.d.ts'
import type { FT_Module_Requester } from '../../../../org/lwjgl/util/freetype/FT_Module_Requester.d.ts'
import type { FT_Module_RequesterI } from '../../../../org/lwjgl/util/freetype/FT_Module_RequesterI.d.ts'
export class FT_Module_Class extends Struct<FT_Module_Class> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GET_INTERFACE: number;
    static MODULE_DONE: number;
    static MODULE_FLAGS: number;
    static MODULE_INIT: number;
    static MODULE_INTERFACE: number;
    static MODULE_NAME: number;
    static MODULE_REQUIRES: number;
    static MODULE_SIZE: number;
    static MODULE_VERSION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Module_Class;
    static calloc(paramarg0: MemoryStack): FT_Module_Class;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Module_Class;
    static create(paramarg0: number): FT_Module_Class;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Module_Class;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Module_Class;
    static malloc(paramarg0: MemoryStack): FT_Module_Class;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nget_interface(paramarg0: number): FT_Module_Requester;
    static nget_interface(paramarg0: number, paramarg1: (param0: number, param1: number) => number): void;
    static nmodule_done(paramarg0: number): FT_Module_Destructor;
    static nmodule_done(paramarg0: number, paramarg1: (param0: number) => void): void;
    static nmodule_flags(paramarg0: number): number;
    static nmodule_flags(paramarg0: number, paramarg1: number): void;
    static nmodule_init(paramarg0: number): FT_Module_Constructor;
    static nmodule_init(paramarg0: number, paramarg1: (param0: number) => number): void;
    static nmodule_interface(paramarg0: number, paramarg1: number): ByteBuffer;
    static nmodule_interface(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmodule_name(paramarg0: number): ByteBuffer;
    static nmodule_name(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmodule_nameString(paramarg0: number): string;
    static nmodule_requires(paramarg0: number): number;
    static nmodule_requires(paramarg0: number, paramarg1: number): void;
    static nmodule_size(paramarg0: number): number;
    static nmodule_size(paramarg0: number, paramarg1: number): void;
    static nmodule_version(paramarg0: number): number;
    static nmodule_version(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Module_Class;
    get_interface(): FT_Module_Requester;
    get_interface(arg0: (param0: number, param1: number) => number): FT_Module_Class;
    module_done(): FT_Module_Destructor;
    module_done(arg0: (param0: number) => void): FT_Module_Class;
    module_flags(): number;
    module_flags(arg0: number): FT_Module_Class;
    module_init(): FT_Module_Constructor;
    module_init(arg0: (param0: number) => number): FT_Module_Class;
    module_interface(arg0: ByteBuffer): FT_Module_Class;
    module_interface(arg0: number): ByteBuffer;
    module_name(): ByteBuffer;
    module_name(arg0: ByteBuffer): FT_Module_Class;
    module_nameString(): string;
    module_requires(): number;
    module_requires(arg0: number): FT_Module_Class;
    module_size(): number;
    module_size(arg0: number): FT_Module_Class;
    module_version(): number;
    module_version(arg0: number): FT_Module_Class;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: number, arg4: number, arg5: ByteBuffer, arg6: (param0: number) => number, arg7: (param0: number) => void, arg8: (param0: number, param1: number) => number): FT_Module_Class;
    set(arg0: FT_Module_Class): FT_Module_Class;
    sizeof(): number;
}