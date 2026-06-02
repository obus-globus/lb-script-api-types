import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderStorageBufferHolder } from '../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBufferHolder.d.ts'
import type { IndirectPointer } from '../../../../net/irisshaders/iris/shaderpack/properties/IndirectPointer.d.ts'
export class FilledIndirectPointer extends Record {
    static basedOff(paramarg0: ShaderStorageBufferHolder, paramarg1: IndirectPointer): FilledIndirectPointer;
    // private buffer: number;
    // private offset: number;
    buffer(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    toString(): string;
}