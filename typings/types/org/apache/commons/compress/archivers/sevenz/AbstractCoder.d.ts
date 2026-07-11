import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Coder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/Coder.d.ts'
export abstract class AbstractCoder extends Object {
    constructor(...arg0: Class<Object>[])
    // private optionClasses: Class<Object>[];
    decode(arg0: string, arg1: InputStream, arg2: number, arg3: Coder, arg4: number[], arg5: number): InputStream;
    encode(arg0: OutputStream, arg1: Object): OutputStream;
    getOptionsAsProperties(arg0: Object): number[];
    getOptionsFromCoder(arg0: Coder, arg1: InputStream): Object;
    isOptionInstance(arg0: Object): boolean;
}