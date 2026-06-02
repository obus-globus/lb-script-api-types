import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { EducationUriResource } from '../../../../../../net/raphimc/viabedrock/protocol/model/EducationUriResource.d.ts'
export class EducationUriResourceType extends Type<EducationUriResource> {
    constructor()
    read(arg0: ByteBuf): EducationUriResource;
    write(arg0: ByteBuf, arg1: EducationUriResource): void;
}