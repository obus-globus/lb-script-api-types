import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BaseModel } from '../../../../ai/djl/BaseModel.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RpcModel extends BaseModel {
    constructor(arg0: string)
    load(arg0: InputStream): void;
    load(arg0: InputStream, arg1: JavaMap<string, Object | null>): void;
    load(arg0: Path): void;
    load(arg0: Path, arg1: string): void;
    load(arg0: Path, arg1: string, arg2: JavaMap<string, Object | null>): void;
}