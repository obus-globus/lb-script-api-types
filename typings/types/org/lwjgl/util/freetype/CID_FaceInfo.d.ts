import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../../../org/lwjgl/CLongBuffer.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { CID_FaceDict } from '../../../../org/lwjgl/util/freetype/CID_FaceDict.d.ts'
import type { FT_BBox } from '../../../../org/lwjgl/util/freetype/FT_BBox.d.ts'
import type { PS_FontInfo } from '../../../../org/lwjgl/util/freetype/PS_FontInfo.d.ts'
export class CID_FaceInfo extends Struct<CID_FaceInfo> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CIDMAP_OFFSET: number;
    static CID_COUNT: number;
    static CID_FONT_NAME: number;
    static CID_FONT_TYPE: number;
    static CID_VERSION: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA_OFFSET: number;
    static FD_BYTES: number;
    static FONT_BBOX: number;
    static FONT_DICTS: number;
    static FONT_INFO: number;
    static GD_BYTES: number;
    static NUM_DICTS: number;
    static NUM_XUID: number;
    static ORDERING: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGISTRY: number;
    static SIZEOF: number;
    static SUPPLEMENT: number;
    static UID_BASE: number;
    static XUID: number;
    static create(paramarg0: number): CID_FaceInfo;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): CID_FaceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ncid_count(paramarg0: number): number;
    static ncid_font_name(paramarg0: number): ByteBuffer;
    static ncid_font_nameString(paramarg0: number): string;
    static ncid_font_type(paramarg0: number): number;
    static ncid_version(paramarg0: number): number;
    static ncidmap_offset(paramarg0: number): number;
    static ndata_offset(paramarg0: number): number;
    static nfd_bytes(paramarg0: number): number;
    static nfont_bbox(paramarg0: number): FT_BBox;
    static nfont_dicts(paramarg0: number): CID_FaceDict;
    static nfont_info(paramarg0: number): PS_FontInfo;
    static ngd_bytes(paramarg0: number): number;
    static nnum_dicts(paramarg0: number): number;
    static nnum_xuid(paramarg0: number): number;
    static nordering(paramarg0: number): ByteBuffer;
    static norderingString(paramarg0: number): string;
    static nregistry(paramarg0: number): ByteBuffer;
    static nregistryString(paramarg0: number): string;
    static nsupplement(paramarg0: number): number;
    static nuid_base(paramarg0: number): number;
    static nxuid(paramarg0: number, paramarg1: number): number;
    static nxuid(paramarg0: number): CLongBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cid_count(): number;
    cid_font_name(): ByteBuffer;
    cid_font_nameString(): string;
    cid_font_type(): number;
    cid_version(): number;
    cidmap_offset(): number;
    create(arg0: number, arg1: ByteBuffer): CID_FaceInfo;
    data_offset(): number;
    fd_bytes(): number;
    font_bbox(): FT_BBox;
    font_dicts(): CID_FaceDict;
    font_info(): PS_FontInfo;
    gd_bytes(): number;
    num_dicts(): number;
    num_xuid(): number;
    ordering(): ByteBuffer;
    orderingString(): string;
    registry(): ByteBuffer;
    registryString(): string;
    sizeof(): number;
    supplement(): number;
    uid_base(): number;
    xuid(): CLongBuffer;
    xuid(arg0: number): number;
}