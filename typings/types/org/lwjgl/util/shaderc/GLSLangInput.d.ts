import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { GLSLIncludeCallbacks } from '../../../../org/lwjgl/util/shaderc/GLSLIncludeCallbacks.d.ts'
import type { GLSLangResource } from '../../../../org/lwjgl/util/shaderc/GLSLangResource.d.ts'
export class GLSLangInput extends Struct<GLSLangInput> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CALLBACKS: number;
    static CALLBACKS_CTX: number;
    static CLIENT: number;
    static CLIENT_VERSION: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CODE: number;
    static DEFAULT_PROFILE: number;
    static DEFAULT_VERSION: number;
    static FORCE_DEFAULT_VERSION_AND_PROFILE: number;
    static FORWARD_COMPATIBLE: number;
    static LANGUAGE: number;
    static MESSAGES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCE: number;
    static SIZEOF: number;
    static STAGE: number;
    static TARGET_LANGUAGE: number;
    static TARGET_LANGUAGE_VERSION: number;
    static calloc(): GLSLangInput;
    static calloc(paramarg0: MemoryStack): GLSLangInput;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLangInput;
    static create(paramarg0: number): GLSLangInput;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLangInput;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLangInput;
    static malloc(paramarg0: MemoryStack): GLSLangInput;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncallbacks(paramarg0: number): GLSLIncludeCallbacks;
    static ncallbacks(paramarg0: number, paramarg1: GLSLIncludeCallbacks): void;
    static ncallbacks_ctx(paramarg0: number): number;
    static ncallbacks_ctx(paramarg0: number, paramarg1: number): void;
    static nclient(paramarg0: number): number;
    static nclient(paramarg0: number, paramarg1: number): void;
    static nclient_version(paramarg0: number): number;
    static nclient_version(paramarg0: number, paramarg1: number): void;
    static ncode(paramarg0: number): ByteBuffer;
    static ncode(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncodeString(paramarg0: number): string;
    static ndefault_profile(paramarg0: number): number;
    static ndefault_profile(paramarg0: number, paramarg1: number): void;
    static ndefault_version(paramarg0: number): number;
    static ndefault_version(paramarg0: number, paramarg1: number): void;
    static nforce_default_version_and_profile(paramarg0: number): number;
    static nforce_default_version_and_profile(paramarg0: number, paramarg1: number): void;
    static nforward_compatible(paramarg0: number): number;
    static nforward_compatible(paramarg0: number, paramarg1: number): void;
    static nlanguage(paramarg0: number): number;
    static nlanguage(paramarg0: number, paramarg1: number): void;
    static nmessages(paramarg0: number): number;
    static nmessages(paramarg0: number, paramarg1: number): void;
    static nresource(paramarg0: number): GLSLangResource;
    static nresource(paramarg0: number, paramarg1: GLSLangResource): void;
    static nstage(paramarg0: number): number;
    static nstage(paramarg0: number, paramarg1: number): void;
    static ntarget_language(paramarg0: number): number;
    static ntarget_language(paramarg0: number, paramarg1: number): void;
    static ntarget_language_version(paramarg0: number): number;
    static ntarget_language_version(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    callbacks(): GLSLIncludeCallbacks;
    callbacks(arg0: (param0: GLSLIncludeCallbacks) => void): GLSLangInput;
    callbacks(arg0: GLSLIncludeCallbacks): GLSLangInput;
    callbacks_ctx(): number;
    callbacks_ctx(arg0: number): GLSLangInput;
    client(): number;
    client(arg0: number): GLSLangInput;
    client_version(): number;
    client_version(arg0: number): GLSLangInput;
    close(): void;
    code(): ByteBuffer;
    code(arg0: ByteBuffer): GLSLangInput;
    codeString(): string;
    create(arg0: number, arg1: ByteBuffer): GLSLangInput;
    default_profile(): number;
    default_profile(arg0: number): GLSLangInput;
    default_version(): number;
    default_version(arg0: number): GLSLangInput;
    force_default_version_and_profile(): boolean;
    force_default_version_and_profile(arg0: boolean): GLSLangInput;
    forward_compatible(): boolean;
    forward_compatible(arg0: boolean): GLSLangInput;
    language(): number;
    language(arg0: number): GLSLangInput;
    messages(): number;
    messages(arg0: number): GLSLangInput;
    resource(): GLSLangResource;
    resource(arg0: GLSLangResource): GLSLangInput;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ByteBuffer, arg7: number, arg8: number, arg9: boolean, arg10: boolean, arg11: number, arg12: GLSLangResource, arg13: GLSLIncludeCallbacks, arg14: number): GLSLangInput;
    set(arg0: GLSLangInput): GLSLangInput;
    sizeof(): number;
    stage(): number;
    stage(arg0: number): GLSLangInput;
    target_language(): number;
    target_language(arg0: number): GLSLangInput;
    target_language_version(): number;
    target_language_version(arg0: number): GLSLangInput;
}