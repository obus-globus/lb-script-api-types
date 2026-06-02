import type { DefaultTypeMapper } from '../../../../com/sun/jna/DefaultTypeMapper.d.ts'
import type { TypeMapper } from '../../../../com/sun/jna/TypeMapper.d.ts'
export class W32APITypeMapper extends DefaultTypeMapper {
    static ASCII: TypeMapper;
    static DEFAULT: TypeMapper;
    static UNICODE: TypeMapper;
    constructor(arg0: boolean)
}