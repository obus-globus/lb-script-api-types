import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedLibrary } from '../../../../org/lwjgl/system/SharedLibrary.d.ts'
import type { GLSLangResource } from '../../../../org/lwjgl/util/shaderc/GLSLangResource.d.ts'
export class GLSLangResourceLimits extends Object {
    static getLibrary(): SharedLibrary;
    static glslang_decode_resource_limits(paramarg0: GLSLangResource, paramarg1: ByteBuffer): void;
    static glslang_default_resource(): GLSLangResource;
    static glslang_default_resource_string(): number;
    static glslang_resource(): GLSLangResource;
    static nglslang_decode_resource_limits(paramarg0: number, paramarg1: number): void;
    static nglslang_default_resource(): number;
    static nglslang_resource(): number;
    constructor()
}