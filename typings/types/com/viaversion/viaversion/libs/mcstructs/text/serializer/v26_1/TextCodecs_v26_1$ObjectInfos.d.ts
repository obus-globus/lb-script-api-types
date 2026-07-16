import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { ObjectComponent$ObjectInfo } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ObjectComponent$ObjectInfo.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextCodecs_v26_1$ObjectInfos extends Enum<TextCodecs_v26_1$ObjectInfos> implements NamedType {
    static ATLAS_SPRITE: TextCodecs_v26_1$ObjectInfos;
    static PLAYER_SPRITE: TextCodecs_v26_1$ObjectInfos;
    static forObjectInfo(paramarg0: ObjectComponent$ObjectInfo): TextCodecs_v26_1$ObjectInfos;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextCodecs_v26_1$ObjectInfos;
    static values(): TextCodecs_v26_1$ObjectInfos[];
    private constructor(arg2: string, arg3: MapCodec<ObjectComponent$ObjectInfo>)
    readonly codec: MapCodec<ObjectComponent$ObjectInfo>;
    getCodec(): MapCodec<ObjectComponent$ObjectInfo>;
    getName(): string;
    name(): "ATLAS_SPRITE" | "PLAYER_SPRITE";
}